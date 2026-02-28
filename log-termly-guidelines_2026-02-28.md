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

---

## 🚀 Next Steps Configuration
*   **User Information:** For all questions regarding data collection, ensure you mention that data is collected for the purpose of providing the service and managing subscriptions.
*   **Third Parties:** Mention that analytics and payment processing may involve third-party services.

---
*Created and Synchronized: 2026-02-28*
