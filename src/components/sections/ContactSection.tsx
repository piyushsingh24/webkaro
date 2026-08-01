"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    alert("Thank you! Our lead engineer will contact you shortly.");
    reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="h2 mb-8">Ready to Build?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Fill out the form to start a conversation with our engineering lead. No sales calls, just pure technical strategy.
            </p>

            <div className="space-y-10">
                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Direct Line</p>
                        <p className="text-xl font-bold">+91 70489 0321</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal flex-shrink-0">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Engineering Lead</p>
                        <p className="text-xl font-bold">hello@webkaro.in</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Base</p>
                        <p className="text-xl font-bold">Sonia Vihar, Delhi, India</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -z-10" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input 
                    placeholder="Your Name" 
                    {...register("name")} 
                    className={errors.name ? "border-red-500/50" : ""}
                  />
                  {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase px-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Email Address" 
                    {...register("email")} 
                    className={errors.email ? "border-red-500/50" : ""}
                  />
                  {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase px-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input 
                    placeholder="Phone Number" 
                    {...register("phone")} 
                    className={errors.phone ? "border-red-500/50" : ""}
                  />
                  {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase px-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <select 
                    {...register("budget")} 
                    className={`flex h-14 w-full rounded-xl border border-white/10 bg-[#0E1424] px-4 py-2 text-sm text-white/40 focus:outline-none focus:ring-2 focus:ring-primary appearance-none transition-all ${errors.budget ? "border-red-500/50" : ""}`}
                  >
                    <option value="">Select Budget</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                    <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                    <option value="5L+">₹5,00,000+</option>
                  </select>
                  {errors.budget && <p className="text-[10px] font-bold text-red-500 uppercase px-1">{errors.budget.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Textarea 
                  placeholder="Tell us about your project/vision..." 
                  rows={4} 
                  {...register("message")}
                  className={errors.message ? "border-red-500/50" : ""}
                />
                {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase px-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl text-base font-bold shadow-glow flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Engineering Your Request..." : "Beam My Inquiry →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
