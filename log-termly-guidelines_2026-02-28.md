# Detailed Termly Configuration Log: VTAC Manager

**Project:** VTAC Manager Website  
**Date:** 2026-02-28  
**Objective:** Record detailed advice and reasoning for Termly legal policy generation.

---

## 📋 Specific Question-by-Question Guidance

### 1. Platform Type & Usage
*   **Question:** Is your platform a website and/or mobile app?
*   **Answer:** **Website**
*   **Reasoning:** Although VTAC uses mobile devices as interactive controllers, it does so via a mobile browser (Web-based). There is no native app to download from an app store ("No Apps, No Friction"), so the "Website" category is the most accurate for legal terms.

### 2. Business Category
*   **Question:** What type of platform is it?
*   **Answer:** **SaaS (Software as a Service)**
*   **Reasoning:** VTAC is a platform providing team management and tactical training services via a membership/subscription model. It fits the SaaS definition perfectly compared to a simple blog or a physical marketplace.

### 3. Online Payments (Critical for Future-Proofing)
*   **Question:** "Does your website/app accept payments online?" (เว็บไซต์/แอปของคุณรับชำระเงินออนไลน์ไหม?)
*   **Answer:** **Yes**
*   **Detailed Reasoning:**
    *   **Future Strategy:** Even though current users primarily "Book a Demo," the ultimate business model is selling Subscriptions to coaches and academies via credit card.
    *   **Efficiency:** Setting this to "Yes" now prevents having to re-edit and re-generate the legal documents when the payment gateway (Pricing plans) goes live.
    *   **Legal Compliance:** Termly will generate sections explaining how payment data is handled. Note that VTAC won't store credit card numbers directly; they will be processed by a trusted Third-Party Gateway (like Stripe or PayPal). Having this in the document from day one ensures full financial legal compliance.

### 4. User Location (Globalization)
*   **Question:** Do you have users in the EU, UK, Iceland, Liechtenstein or Norway?
*   **Answer:** **Yes**
*   **Reasoning:** VTAC headquarters is in **Leicester, UK**. By default, you have UK users. Answering "Yes" ensures the policy includes mandatory GDPR and UK-GDPR compliance language.

*   **Question:** Do you have users in the United States?
*   **Answer:** **Yes**
*   **Reasoning:** We have already implemented an **en-US (US English)** localization for the website. This clearly indicates intent to serve the US market. Answering "Yes" will include necessary disclosures for US State-level privacy laws (like CCPA).

### 5. Hosting (Infrastructure Connectivity)
*   **Question:** Which country is your platform hosted in?
*   **Answer:** **United Kingdom**
*   **Reasoning:** Since VTAC's legal and physical operation is based in **Leicester, UK**, designating the UK as the primary hosting jurisdiction aligns with your UK-GDPR compliance and local operations.

*   **Question:** Is your platform hosted in any other country?
*   **Answer:** **Yes** (Add: **United States**)
*   **Reasoning:** Your website uses **Vercel** (Edge network) and **Supabase** (Cloud Database), both of which utilize global infrastructures primarily centered in the US (AWS). Disclosing this "Cross-border" processing is a mandatory legal requirement for international data transfers.

### 6. Use and Description (Scope of Purpose)
*   **Question:** Do you want to include a description about your website and/or app?
*   **Answer:** **Yes**
*   **Recommendation Description:** "VTAC MANAGER provides an integrated digital ecosystem for sports team management and interactive tactical training sessions."
*   **Reasoning:** Providing a clear description defines the scope of the service provided, which is essential for limiting liability in terms and conditions.

*   **Question:** Are your products for your users' personal and/or internal business use?
*   **Answer:** **Both**
*   **Reasoning:** VTAC serves both **Independent Coaches** (Personal use for their teams) and **Large Organizations/Schools** (Internal business use for managing multiple squads). Selecting both ensures the terms apply correctly to both individual and corporate users.

### 7. User Age (Protections for Minors)
*   **Question:** Can users under the age of 18 use your platform?
*   **Answer:** **Yes**
*   **Reasoning:** Since VTAC's core features include **"Youth Academies"** and **"Schools"**, it is inevitable that student-athletes under 18 will be primary users of the interactive tactical engine and the Digital CV system.
*   **Compliance Note:** Answering "Yes" is the most honest and legally sound choice given your target sectors. This will trigger Termly to include necessary clauses about **Parental Consent**, ensuring that when a school or academy signs up, they are responsible for obtaining permission for their minor players to use the system.

*   **Question:** Can users under the age of 13 use your platform?
*   **Answer:** **Yes**
*   **Detailed Reasoning:**
    *   **Market Reach:** Professional academies and local schools often start training players from age 7-8 onwards. To be a "Complete Digital Ecosystem," VTAC must accommodate these younger age groups.
    *   **Legal Protections (COPPA & GDPR Kiddie):** Answering "Yes" is crucial because it triggers the highest level of data protection language required by **COPPA (USA)** and **GDPR (Europe/UK)** for children. 
    *   **Liability Shift:** The resulting Terms will specify that for users under 13, the **Institution (School/Academy)** or the **Parent** must create the account/provide consent. This protects VTAC from being liable for directly collecting data from children without authorization.

### 8. User Accounts (Membership Access)
*   **Question:** Can users create an account on your platform?
*   **Answer:** **Yes**
*   **Reasoning:** VTAC is a personalized management system. Features like the **"iHub Dashboard"**, **"Digital CV"**, and **"Interactive Tactical Sessions"** all require individual accounts for coaches and players to track progress and maintain privacy.

### 9. Subscriptions (Core Business Model)
*   **Question:** Do you offer a subscription service for your product?
*   **Answer:** **Yes**
*   **Reasoning:** This is the primary revenue model for VTAC MANAGER. As detailed in the **Pricing** section, VTAC offers monthly and annual billing plans (**VTAC SINGLE**, **MULTI-TEAM**, and **ENTERPRISE**).
*   **Compliance Note:** Selecting "Yes" ensures the Terms include critical clauses about **Recurring Billing**, **Cancellation Policies**, and **No Refunds** (unless required by law), which are vital for a SaaS business.

*   **Question:** Does the subscription automatically renew?
*   **Answer:** **Yes**
*   **Reasoning:** Standard SaaS business logic (like Stripe/PayPal) uses automatic renewal to ensure service continuity for coaches and teams.

*   **Question:** How customers can renew their subscription?
*   **Answer:** **"Subscriptions automatically renew at the end of each billing cycle (monthly or annually) using the original payment method. Users can manage or update their billing details through their iHub account settings."**

*   **Question:** How often does the subscription renew?
*   **Answer:** **The customer chooses**
*   **Reasoning:** As seen on the **Pricing** page, VTAC offers both **Monthly** and **Annual** billing cycles. The frequency depends on which plan the user selects at checkout.

### 10. Free Trials (Onboarding Strategy)
*   **Question:** Do you offer a free trial for your subscription?
*   **Answer:** **Yes**
*   **Question:** How many days is the free trial?
*   **Answer:** **7 Days**
*   **Question:** At the end of the free trial period:
*   **Answer:** **The account will not be charged and the subscription will be suspended until upgraded to a paid version**
*   **Reasoning:** Since our current CTA is **"Book a Demo"** and we want to reduce friction for new coaches, a 7-day "No Credit Card Required" trial is the standard low-friction onboarding strategy. Suspending the account instead of auto-charging ensures users don't feel "tricked," which builds higher brand trust.

### 11. Payments (Financial Transactions)
*   **Question:** What forms of payment do you accept?
*   **Answer:** Select: **Visa, Mastercard, American Express, PayPal**.
*   **Question:** What currency type should payments be in?
*   **Answer:** Select: **British Pounds (GBP)**, **US Dollars (USD)**, **Euros (EUR)**, and **Thai Baht (THB)**.
*   **Reasoning:** 
    *   **Methods:** These are the standard options for Stripe/PayPal gateways which we plan to use.
    *   **Currency:** Since VTAC is headquartered in the UK, **GBP (£)** is the primary billing currency. However, given our significant investment in Thai localization (**th.json**) and US/EU markets, including **THB**, **USD**, and **EUR** ensures full legal coverage for our global user base and future local payment integrations in Thailand.

### 12. Cancellation and Refunds (Account Termination)
*   **Question:** Can users ask for a refund on their purchases?
*   **Answer:** **No**
*   **Reasoning:** As is standard for digital SaaS services, a "No Refund" policy (except as required by law) protects the company from abuse of digital services. 

*   **Question:** How can users cancel their subscription?
*   **Answer:** Select both: **Logging into their account** and **Contacting customer service**.
*   **Reasoning:** Offering both paths is legally required in many jurisdictions (like the EU/UK) and provides the best experience for coaches who may prefer self-service or direct support.

### 13. Prohibited Activities (System Integrity)
*   **Question:** Use the Services to advertise or offer to sell goods and services?
*   **Answer:** **Check (Yes)**
*   **Reasoning:** Prevents users from using VTAC as an advertising platform, maintaining its purpose as a tactical training tool.

*   **Question:** Sell or otherwise transfer your profile?
*   **Answer:** **Check (Yes)**
*   **Reasoning:** Critical for the **Digital CV** and club privacy. Prevents unauthorized redistribution of tactical data and professional history.

### 14. Content and Corrections (Data Ownership)
*   **Question:** Can users post content on your platform?
*   **Answer:** **Yes** (Types: **Text, Image**)
*   **Question:** Does your platform have public content that other users can see?
*   **Answer:** **No**
*   **Reasoning:** VTAC is a private ecosystem for sports clubs. While users create data (tactics, CVs), this data is restricted to authorized team members and is not accessible to the general public.

*   **Question:** Can users post reviews for your products or services?
*   **Answer:** **No**
*   **Question:** Does your platform allow users to post corrections to their content?
*   **Answer:** **Yes**
*   **Reasoning:** Aligns with GDPR/Data Privacy rights, allowing users to rectify inaccurate personal or tactical information.

### 15. Third-Party Websites (Liability Limitation)
*   **Question:** Does your platform link to any other websites that you do not own?
*   **Answer:** **Yes**
*   **Reasoning:** Essential for linking to Payment Gateways (**Stripe/PayPal**) and external resources/partners. Answering "Yes" ensures that VTAC is not held liable for the content or privacy practices of external sites.

### 16. Advertisements (Monetization and Sponsorship)
*   **Question:** Do you have third-party advertisements on your platform?
*   **Answer:** **Yes**
*   **Reasoning:** Even though VTAC is a premium SaaS, the future monetization roadmap includes selling **Banner Space** (e.g., to sports brands or sponsors) on key interfaces like the **Dashboard**. Answering "Yes" now covers the legal disclosure for showing paid content and ensures users are informed about potential sponsorship placements.

### 17. Copyright (Intellectual Property Protection)
*   **Question:** Do you have a designated copyright agent?
*   **Answer:** **No**
*   **Reasoning:** A designated agent requires official registration with agencies like the US Copyright Office (DMCA). Selecting "No" keeps the legal requirements simpler for the current phase. Ownership and general copyright protection are still covered in the main terms without needing a registered agent.

*   **Question:** Do you want to include a clause regarding how users can notify you regarding copyright infringements?
*   **Answer:** **Yes**
*   **Reasoning:** Providing a structured contact method (like your support email) for copyright complaints is a best practice. It shows professionalism and provides a "Safe Harbor" mechanism where you can resolve disputes internally before they escalate to legal action.

### 18. Dispute Resolution (Conflict Management)
*   **Question:** How will disputes between you and your users be resolved?
*   **Answer:** **Informal negotiations, then arbitration**
*   **Question:** In which country will the arbitration take place?
*   **Answer:** **United Kingdom** (England and Wales)
*   **Question:** In which city will the arbitration take place?
*   **Answer:** **Leicester**
*   **Question:** What language will be used in the arbitral proceedings?
*   **Answer:** **English**
*   **Question:** How many days must the parties mediate before initiating an arbitration proceeding?
*   **Answer:** **30 Days**
*   **Reasoning:** 
    *   **Location:** Since VTAC's Global Headquarters is located in **Leicester, UK**, choosing this city as the venue is the most cost-effective and convenient.
    *   **Language:** **English** is the primary business language of VTAC and the jurisdiction, ensuring clarity and minimizing translation costs.
    *   **Timeline:** **30 days** is the gold standard for informal negotiations. it gives enough time for our support team to talk to the coach/club and find a win-win solution before lawyers get involved.

### 19. Limitation of Liability (Financial Protection)
*   **Question:** Do you want to limit the amount of your liability for any claims against your platform?
*   **Answer:** **Yes, limit to amount paid by the user**
*   **Reasoning:** This is a crucial protective clause. It ensures that VTAC's maximum financial exposure to any single user claim is capped at what they actually spent on the services. It prevents "consequential damages" claims (e.g., a team claiming lost revenue or tournament winnings due to a technical glitch) from bankrupting the startup.

---

## 🚀 Next Steps Configuration
*   **User Information:** For all questions regarding data collection, ensure you mention that data is collected for the purpose of providing the service and managing subscriptions.
*   **Third Parties:** Mention that analytics and payment processing may involve third-party services.

---
*Created and Synchronized: 2026-02-28*
