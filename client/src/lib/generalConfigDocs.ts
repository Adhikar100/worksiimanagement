export const generalConfigDocs = `
# General Configuration Documentation

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Navigation & Access](#2-navigation--access)
3. [Auto Top-Up Settings](#3-auto-top-up-settings)
4. [Email Signatures](#4-email-signatures)
5. [Firebase Project](#5-firebase-project)
6. [API Client](#6-api-client)
7. [Role & Access Considerations](#7-role--access-considerations)
8. [Handover Checklist](#8-handover-checklist)

---

## 1. Introduction

The **General Configuration** module is a core administrative area in the Worksii platform. It contains **system-wide settings** that directly affect:

- Wallet funding and financial continuity
- Email communication branding
- Third-party service integrations
- Secure API access

This document is written for **administrators**, QA engineers, and operations team members who are onboarding to the Worksii system. It explains **what each configuration does, why it exists, how it behaves**, and **what can go wrong if misconfigured**.

> **Warning:** Any misconfiguration in this section can impact campaigns, payments, notifications, or external integrations.

---

## 2. Navigation & Access

**Dashboard → General Configuration**

Only users with **admin-level permissions** should have access to this module.

The General Configuration menu contains the following sub-sections:

| Sub-Section | Purpose |
|---|---|
| Auto Top-Up Settings | Configure automatic wallet recharge |
| Email Signatures | Manage email signature blocks |
| Firebase Project | Connect Firebase services |
| API Client | Manage API access credentials |

---

## 3. Auto Top-Up Settings

### 3.1 What is Auto Top-Up?

Worksii uses a **wallet-based system** for executing campaigns (email, WhatsApp, messaging, etc.). Every campaign consumes wallet balance.

The **Auto Top-Up Settings** feature ensures that the wallet is **automatically recharged** when the balance becomes low, so that:

- Campaigns do not stop unexpectedly
- Messages are not partially delivered
- Admins do not need to manually monitor balance 24/7

### 3.2 How Auto Top-Up Works

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│              Auto Top-Up Process Flow                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. System monitors wallet balance continuously             │
│                    ↓                                        │
│  2. Balance compared against Minimum Threshold              │
│                    ↓                                        │
│  3. If balance < threshold → Auto Top-Up triggers           │
│                    ↓                                        │
│  4. Configured payment method is charged                    │
│                    ↓                                        │
│  5. Wallet credited with Auto Top-Up Amount                 │
│                    ↓                                        │
│  6. Transaction logged in Wallet Transactions               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 3.3 Configuration Fields

| Field | Description | Required |
|---|---|---|
| Minimum Balance Threshold | Trigger point - auto top-up happens when balance goes below this value | Yes |
| Auto Top-Up Amount | Amount added to wallet per trigger | Yes |
| Select Payment Method | Payment gateway used for automatic recharge (e.g., Stripe) | Yes |
| Enable Auto Fund | Master switch for the feature | Yes |

#### Minimum Balance Threshold

- This is the **trigger point**
- Auto top-up happens only when balance drops below this value
- Accepts numeric values only

**Example:**
- Threshold = 100
- Wallet balance = 99 → Auto top-up triggers

#### Auto Top-Up Amount

- Amount that will be added to the wallet per trigger
- Should be planned based on average campaign cost

> **Best Practice:** Keep this high enough to avoid frequent top-ups.

#### Select Payment Method

- Payment gateway used for automatic recharge
- Currently supported: **Stripe**

> Payment method must already be configured and active.

#### Enable Auto Fund

- Master switch for the feature
- If OFF → No automatic recharge occurs (even if values are set)

### 3.4 Configuration Form

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Auto Top-Up Settings                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Minimum Balance Threshold *                                │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 100                                                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Auto Top-Up Amount *                                       │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 500                                                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Select Payment Method *                                    │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Stripe                                              ▼   ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Enable Auto Fund                                           │
│  [━━━━━━━━━━ ON ]                                          │
│                                                             │
│                    [Reset]  [Save]                          │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 3.5 Action Buttons

| Button | Function |
|---|---|
| Save | Validates inputs and activates configuration |
| Reset | Clears form values (does not affect saved configuration) |

### 3.6 Common Mistakes

| Mistake | Impact | Solution |
|---|---|---|
| Setting threshold too low | Campaigns may fail before recharge | Set threshold to cover at least one campaign |
| Forgetting to enable Auto Fund | No automatic recharge occurs | Ensure toggle is ON |
| Using inactive payment method | Recharge fails | Verify payment method is active |

---

## 4. Email Signatures

### 4.1 What are Email Signatures?

Email Signatures are **reusable content blocks** appended to outbound campaign emails. They ensure:

- Brand consistency
- Professional communication
- Approved contact information

Signatures are managed centrally and reused across multiple campaigns.

### 4.2 Email Signature Listing

The listing table shows all created signatures with:

| Column | Description |
|---|---|
| SN | Serial Number |
| Signature Name | Identifier for the signature |
| Created Date | When signature was created |
| Updated Date | Last modification date |
| Actions | View, Edit, Delete options |

This helps admins quickly:
- Identify outdated signatures
- Audit usage
- Maintain consistency

### 4.3 Creating a New Email Signature

**Step 1:** Click **"+ Add Signature"** button.

**Step 2:** Enter a **Signature Name**.
- Use meaningful names (e.g., "Marketing Team – Default")

**Step 3:** Enter signature content:
- Name
- Designation
- Company
- Contact information

**Step 4:** Click **"Save"**.

Once saved, the signature becomes available in email campaign setup.

### 4.4 Signature Form

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Add New Signature                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Signature Name *                                           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Marketing Team - Default                                ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Signature Content *                                        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Best Regards,                                           ││
│  │ John Smith                                              ││
│  │ Marketing Manager                                       ││
│  │ Worksii Inc.                                            ││
│  │ Email: john@worksii.com                                 ││
│  │ Phone: +1 234 567 890                                   ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│                    [Cancel]  [Save]                         │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 4.5 Available Actions

| Action | Description |
|---|---|
| View | Preview signature content |
| Edit | Update content or name |
| Delete | Permanently remove (confirmation required) |

> **Warning:** Deleted signatures cannot be recovered.

### 4.6 Impact on Campaigns

- Active campaigns will use the selected signature
- Changes apply to **future executions** only
- Deleted signatures will not appear in campaign configuration

---

## 5. Firebase Project

### 5.1 Purpose

The Firebase Project section connects Worksii with **Firebase services**, which may be used for:

- Push notifications
- Real-time updates
- Event tracking

### 5.2 Configuration Overview

Admins are required to:

1. Add Firebase project credentials
2. Ensure correct environment setup (production / staging)

### 5.3 Configuration Fields

| Field | Description |
|---|---|
| Project ID | Firebase project identifier |
| API Key | Firebase API key |
| Auth Domain | Firebase authentication domain |
| Environment | Production or Staging |

### 5.4 Operational Risks

| Risk | Impact |
|---|---|
| Incorrect credentials | Notifications may fail |
| Environment mismatch | Data inconsistency between environments |

---

## 6. API Client

### 6.1 What is API Client?

The API Client module manages **secure access credentials** for external systems that integrate with Worksii.

**Examples of external systems:**
- Third-party CRMs
- Data ingestion tools
- Partner platforms

### 6.2 Key Functions

| Function | Description |
|---|---|
| Generate API Keys | Create new access credentials |
| Manage Keys | Activate or deactivate existing keys |
| Control Access | Restrict system access by key |

### 6.3 API Key Listing

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  API Clients                              [+ Generate Key]  │
├─────────────────────────────────────────────────────────────┤
│  Key Name       │ Status   │ Created    │ Actions          │
├─────────────────┼──────────┼────────────┼──────────────────┤
│  CRM Integration│ Active   │ 2024-01-15 │ [View] [Revoke]  │
│  Partner API    │ Active   │ 2024-02-20 │ [View] [Revoke]  │
│  Test Key       │ Inactive │ 2023-12-01 │ [View] [Delete]  │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 6.4 Security Best Practices

| Practice | Reason |
|---|---|
| Never share API keys publicly | Prevents unauthorized access |
| Rotate keys periodically | Limits exposure if compromised |
| Revoke unused keys immediately | Reduces attack surface |
| Use descriptive key names | Helps track key usage |

---

## 7. Role & Access Considerations

### 7.1 Access Control

- Only **Admin users** should access General Configuration
- Changes should be logged and reviewed
- QA should verify configurations in staging before production

### 7.2 Permission Matrix

| Role | Access Level |
|---|---|
| Super Admin | Full access (view, edit, delete) |
| Admin | Full access (view, edit, delete) |
| Manager | View only |
| User | No access |

---

## 8. Handover Checklist

### For New Administrators

Use this checklist when onboarding to the Worksii platform:

| Task | Status |
|---|---|
| Review Auto Top-Up settings | ☐ |
| Confirm payment method is active | ☐ |
| Audit existing Email Signatures | ☐ |
| Verify Firebase credentials | ☐ |
| Validate API keys | ☐ |
| Document any issues found | ☐ |

### Verification Steps

**Auto Top-Up:**
1. Check threshold is set appropriately
2. Verify payment method is connected
3. Confirm Enable Auto Fund is ON

**Email Signatures:**
1. Review all active signatures
2. Delete outdated ones
3. Create new ones if needed

**Firebase:**
1. Verify project credentials are correct
2. Confirm environment matches (prod/staging)

**API Client:**
1. Audit all active keys
2. Revoke any unused keys
3. Document key purposes

---

## Final Notes

General Configuration is **foundational** to system stability. Always treat changes carefully and validate after updates.

> **Important:** Test all configuration changes in a staging environment before applying to production.

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | General Configuration User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | General Configuration |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
