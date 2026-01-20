/**
 * ARCHIVED: Band Class (The Sandbox) Program Data
 * This file contains the original Band Class component data for future retrieval.
 * 
 * To restore: Copy the relevant sections back to Programs.tsx and EnrollSection.tsx
 */

export const BandClassProgramCard = {
  title: "BAND CLASS",
  subtitle: "The Sandbox",
  icon: "Zap",
  description: `Open Enrollment. Minimal experience required. Full band environment. All instruments welcome. A low-pressure, high-energy environment to find your footing, try out different instruments and band roles, jam with a variety of other musicians, socialize, and build confidence before hitting the main stage.`,
  pricing: {
    amount: 100,
    period: "month",
    firstClassFree: true,
  },
  features: [
    "Weekly 60-minute guided group sessions",
    "Youth & Adult sessions available",
    "Learn to play your instrument naturally in a band",
    "Have fun :)",
    "Cancel anytime"
  ],
  ctaText: "Join Band Class",
  ctaHref: "#enroll-band-practice",
  enrollmentNotice: "📢 Enrollment now open for the week of January 15th, pending min enrollment. Stay tuned for updates on meeting times!"
};

export const BandClassEnrollCard = {
  title: "BAND CLASS",
  subtitle: "The Sandbox",
  icon: "Music",
  description: "Join our weekly group sessions! Your first class is FREE—perfect for beginners and intermediate players looking to jam with others.",
  format: "Weekly 60-min sessions",
  investment: "$100/month",
  firstClass: "FREE",
  ctaText: "To sign up, please contact:",
};

/**
 * JSX for Programs.tsx Band Class card:
 * 
 * <div className="rock-card p-8 rounded-sm flex flex-col">
 *   <div className="flex items-center gap-3 mb-4">
 *     <Zap className="w-8 h-8 text-primary" />
 *     <h3 className="font-oswald text-2xl font-bold">BAND CLASS</h3>
 *   </div>
 *   <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
 *     The Sandbox
 *   </div>
 *   
 *   <p className="text-muted-foreground mb-6">
 *     Open Enrollment. Minimal experience required. Full band environment. All instruments welcome. A low-pressure, high-energy environment to find your footing, try out different instruments and band roles, jam with a variety of other musicians, socialize, and build confidence before hitting the main stage.
 *   </p>
 *   
 *   <div className="mb-4">
 *     <div className="text-3xl font-bold text-foreground">
 *       $100<span className="text-lg text-muted-foreground font-normal">/month</span>
 *     </div>
 *     <div className="text-sm text-primary mt-1">First class is FREE!</div>
 *   </div>
 *   
 *   <div className="bg-primary/10 border border-primary/30 rounded-sm p-3 mb-6">
 *     <p className="text-sm text-primary font-semibold">
 *       📢 Enrollment now open for the week of January 15th, pending min enrollment. Stay tuned for updates on meeting times!
 *     </p>
 *   </div>
 *   
 *   <ul className="space-y-3 mb-8">
 *     {[
 *       "Weekly 60-minute guided group sessions",
 *       "Youth & Adult sessions available",
 *       "Learn to play your instrument naturally in a band",
 *       "Have fun :)",
 *       "Cancel anytime"
 *     ].map((item, i) => (
 *       <li key={i} className="flex items-start gap-2 text-sm">
 *         <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
 *         <span>{item}</span>
 *       </li>
 *     ))}
 *   </ul>
 *   
 *   <a 
 *     href="#enroll-band-practice" 
 *     className="btn-rock-outline py-3 rounded-sm text-center block mt-auto"
 *   >
 *     Join Band Class
 *   </a>
 * </div>
 */
