
import { useToast, toast } from "@/hooks/use-toast";

// Add custom toast styling
const customToast = {
  ...toast,
  welcome: (message: string) => {
    toast({
      title: "Welcome to Andata",
      description: message,
      className: "welcome-toast bg-gradient-to-r from-saffron/90 to-terracotta/90 text-white border-white/20"
    });
  }
};

export { useToast, toast, customToast };
