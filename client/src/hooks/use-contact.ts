import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput, type NewsletterInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// POST /api/contact
export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Validate locally first just in case
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message. Please try again.");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

// POST /api/newsletter
export function useSubscribeNewsletter() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: NewsletterInput) => {
      const validated = api.newsletter.subscribe.input.parse(data);
      
      const res = await fetch(api.newsletter.subscribe.path, {
        method: api.newsletter.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.newsletter.subscribe.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 409) {
           const error = api.newsletter.subscribe.responses[409].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error("Failed to subscribe. Please try again.");
      }
      
      return api.newsletter.subscribe.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You have been successfully added to our newsletter.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
