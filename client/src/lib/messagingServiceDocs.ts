export const messagingServiceDocs = `
# Messaging Service - Templates Documentation

---

## Table of Contents

1. [Introduction to Templates](#1-introduction-to-templates)
2. [Accessing Templates](#2-accessing-templates)
3. [Template Types Overview](#3-template-types-overview)
4. [Creating a WhatsApp Template](#4-creating-a-whatsapp-template)
5. [Template Fields and Configuration](#5-template-fields-and-configuration)
6. [Using Variables in Templates](#6-using-variables-in-templates)
7. [Adding Sample Data](#7-adding-sample-data)
8. [Submitting for Approval](#8-submitting-for-approval)
9. [Template Best Practices](#9-template-best-practices)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Introduction to Templates

### 1.1 Purpose

The Templates feature within the Messaging Service module allows you to create pre-approved message templates for various communication channels. These templates ensure consistent messaging and compliance with platform policies.

### 1.2 Supported Template Types

The Worksii platform supports templates for the following messaging channels:

| Channel | Description | Approval Required |
|---|---|---|
| WhatsApp | Business messaging via WhatsApp Business API | Yes (Meta approval) |
| SMS | Text messaging to mobile devices | Platform approval |
| Email | Electronic mail communications | Platform approval |
| Push Notification | Mobile app notifications | Platform approval |

### 1.3 Why Use Templates

- **Consistency:** Ensure uniform messaging across your organization
- **Compliance:** Meet platform requirements for business messaging
- **Efficiency:** Quickly send pre-approved messages without delays
- **Personalization:** Use variables to customize messages for each recipient

---

## 2. Accessing Templates

### 2.1 Navigation Path

To access the Templates section:

**Step 1:** Log in to your Worksii account.

**Step 2:** In the left sidebar, locate and click on **"Messaging Service"**.

**Step 3:** The Messaging Service menu will expand to show submenu items.

**Step 4:** Click on **"Templates"** to access the template management page.

### 2.2 Navigation Summary

\`\`\`plaintext
Sidebar > Messaging Service > Templates
\`\`\`

### 2.3 Templates Page Overview

The Templates page displays:

| Element | Description |
|---|---|
| Template List | All existing templates organized by type |
| Create New Button | Button to create a new template |
| Filter Options | Filter templates by type, status, or date |
| Search Bar | Search for specific templates by name |

---

## 3. Template Types Overview

### 3.1 Selecting a Template Type

When creating a new template, you must first select the messaging type:

**Step 1:** Click the **"Create New"** button on the Templates page.

**Step 2:** A selection dialog will appear with the following options:

- **Push Notification** - For mobile app push notifications
- **WhatsApp** - For WhatsApp Business messaging
- **SMS** - For text message communications
- **Email** - For email communications

**Step 3:** Click on your desired template type to proceed.

### 3.2 Template Type Comparison

| Feature | WhatsApp | SMS | Email | Push Notification |
|---|---|---|---|---|
| Rich Media | Yes (images, documents) | No | Yes | Limited |
| Variables | Yes | Yes | Yes | Yes |
| Buttons | Yes | No | Yes (links) | Yes |
| Character Limit | 1024 (body) | 160-320 | Unlimited | 256 |
| Approval Time | 24-48 hours | Instant | Instant | Instant |

---

## 4. Creating a WhatsApp Template

### 4.1 Overview

WhatsApp templates are pre-approved message formats that allow businesses to send outbound messages to customers. All WhatsApp templates must be approved by Meta before use.

### 4.2 Starting the Creation Process

**Step 1:** Navigate to **Messaging Service > Templates**.

**Step 2:** Click the **"Create New"** button.

**Step 3:** Select **"WhatsApp"** from the template type options.

**Step 4:** The WhatsApp Template creation form will open.

### 4.3 WhatsApp Template Form

The creation form contains the following sections:

\`\`\`plaintext
┌─────────────────────────────────────────┐
│         WhatsApp Template               │
│         Create Template                 │
├─────────────────────────────────────────┤
│  Language *          [Select language]  │
├─────────────────────────────────────────┤
│  WABA ID *           [Select WABA ID]   │
├─────────────────────────────────────────┤
│  Category *          [Select category]  │
├─────────────────────────────────────────┤
│  Template Name *     [Enter name]       │
├─────────────────────────────────────────┤
│  Header              [None/Text/Media]  │
├─────────────────────────────────────────┤
│  Body *              [Enter body text]  │
├─────────────────────────────────────────┤
│  Footer              [Optional footer]  │
├─────────────────────────────────────────┤
│  Buttons             [Optional buttons] │
├─────────────────────────────────────────┤
│  [Add Sample Data]  [Submit for Approval]│
└─────────────────────────────────────────┘
\`\`\`

---

## 5. Template Fields and Configuration

### 5.1 Language Selection

**Field:** Language *

**Purpose:** Specifies the language of the template content.

**Step 1:** Click on the **"Select language"** dropdown.

**Step 2:** Choose from available languages:
- English (UK)
- English (US)
- Arabic
- Bengali
- Chinese (Simplified)
- Chinese (Traditional)
- Dutch
- French
- German
- Hindi
- And many more...

**Step 3:** Select your desired language.

**Important:** Each language variation requires a separate template.

### 5.2 WABA ID (WhatsApp Business Account ID)

**Field:** WABA ID *

**Purpose:** Links the template to your WhatsApp Business Account.

**Step 1:** Click on the **"Select WhatsApp Business Account ID"** dropdown.

**Step 2:** Select your connected WhatsApp Business Account.
- Example: "+44 7717 890478"

**Note:** You must have a WhatsApp Business Account connected to your Worksii account to create templates.

### 5.3 Category Selection

**Field:** Category *

**Purpose:** Defines the type of message for Meta's approval process.

**Available Categories:**

| Category | Use Case | Description |
|---|---|---|
| Utility | Service updates | Order updates, account alerts, appointment reminders |
| Marketing | Promotional | Offers, product announcements, newsletters |
| Authentication | Verification | OTPs, login codes, password resets |

**Step 1:** Click on the **"Select category"** dropdown.

**Step 2:** Choose the appropriate category:
- **Utility** - For transactional messages
- **Marketing** - For promotional content
- **Authentication** - For verification codes

### 5.4 Template Name

**Field:** Template Name *

**Purpose:** A unique identifier for your template.

**Naming Rules:**
- Use only lowercase letters, numbers, and underscores
- No spaces allowed
- Must be unique within your account
- Maximum 512 characters

**Step 1:** Click on the template name input field.

**Step 2:** Enter a descriptive name.
- Example: "testing_of_document"
- Example: "order_confirmation_v2"
- Example: "appointment_reminder"

### 5.5 Header Configuration

**Field:** Header (Optional)

**Purpose:** Adds a header above the message body.

**Header Types:**

| Type | Description |
|---|---|
| None | No header (default) |
| Text | Plain text header |
| Image | Image file header |
| Video | Video file header |
| Document | PDF or document header |

### 5.6 Body Content

**Field:** Body *

**Purpose:** The main message content.

**Step 1:** Click on the **"Enter body text"** textarea.

**Step 2:** Type your message content.

> **Important:** Variables cannot be placed at the beginning or end of the body text. Always ensure there is text before and after each variable.

**Correct Example:**
\`\`\`plaintext
This is for the {{1}} testing, and your order {{2}} has been confirmed.
\`\`\`

**Incorrect Example:**
\`\`\`plaintext
{{1}}, your order has been shipped.    ❌ (Variable at the beginning)
Your order number is {{1}}             ❌ (Variable at the end)
\`\`\`

**Character Limit:** Maximum 1024 characters for the body text.

### 5.7 Footer

**Field:** Footer (Optional)

**Purpose:** Adds a footer below the message body.

**Step 1:** Click on the **"Footer"** input field.

**Step 2:** Enter footer text (e.g., company name, disclaimer).

**Character Limit:** Maximum 60 characters.

### 5.8 Buttons

**Field:** Buttons (Optional)

**Purpose:** Adds interactive buttons to the message.

**Button Types:**
- **Call to Action** - Phone call or website link
- **Quick Reply** - Pre-defined response options

---

## 6. Using Variables in Templates

### 6.1 What Are Variables?

Variables are placeholders that get replaced with actual data when the message is sent. They allow you to personalize messages for each recipient.

### 6.2 Variable Format

Variables use the format: **{{number}}**

| Variable | Example Use |
|---|---|
| {{1}} | Customer name |
| {{2}} | Order number |
| {{3}} | Date/Time |
| {{4}} | Amount |
| {{5}} | Custom value |

### 6.3 Adding Variables to Body Text

**Step 1:** Place your cursor where you want to insert a variable in the body text.

**Step 2:** Click the **"Add Variable"** button.

**Step 3:** The next available variable (e.g., {{1}}, {{2}}) will be inserted.

**Step 4:** Continue adding text and variables as needed.

> **Important Rule:** Variables **cannot** be placed at the very beginning or the very end of the message body. There must always be text before and after each variable.

**Correct Format:**
\`\`\`plaintext
This is for the {{1}} testing.
\`\`\`
In this example, "This is for the " comes before the variable, and " testing." comes after it.

**Incorrect Formats:**
\`\`\`plaintext
{{1}} this is the message          ❌ (Variable at the beginning)
This is the message {{1}}          ❌ (Variable at the end)
{{1}}                              ❌ (Only variable, no text)
\`\`\`

**Example Template Body (Correct):**
\`\`\`plaintext
Hello, dear {{1}} customer!

Thank you for placing order number {{2}} with us. 

Your package will be delivered on {{3}} at your address.

Best regards,
The Worksii Team
\`\`\`

### 6.4 Variable Guidelines

- **Variables must have text before AND after them** - they cannot be at the start or end of the message
- Variables must be numbered sequentially ({{1}}, {{2}}, {{3}}...)
- You cannot skip numbers (no {{1}} then {{3}})
- Each variable should have a clear purpose
- Too many variables relative to text length may be rejected

**Warning:** If your template contains too many variables relative to the message length, you will see an error:
\`\`\`plaintext
"This template contains too many variable parameters relative to the message length. You need to decrease the number of variables or increase the text length."
\`\`\`

---

## 7. Adding Sample Data

### 7.1 Purpose of Sample Data

Sample data shows Meta what your template will look like with real content. This helps in the approval process by demonstrating the intended use of your template.

### 7.2 Template Preview

After entering your body text (e.g., "This is for the {{1}} testing"), you will see:

1. **WhatsApp Preview** - A phone preview showing how your message will appear
2. **Three buttons at the bottom:**
   - **Cancel** (red) - Discard and go back
   - **Add Sample Data** (orange outline) - Map variables with sample content
   - **Submit for Approval** (orange filled) - Submit to Meta for review

\`\`\`plaintext
┌─────────────────────────────────┐
│        WhatsApp Preview         │
│  ┌───────────────────────────┐  │
│  │ This is for the {{1}}    │  │
│  │ testing                   │  │
│  │                    13:36  │  │
│  └───────────────────────────┘  │
│                                 │
│ [Cancel] [Add Sample Data] [Submit for Approval] │
└─────────────────────────────────┘
\`\`\`

### 7.3 Adding Sample Data Dialog

**Step 1:** Click the **"Add Sample Data"** button.

**Step 2:** A dialog will appear with:

\`\`\`plaintext
┌──────────────────────────────────────────────────────────┐
│  Add Sample Data                                    [X]  │
│                                                          │
│  Map the placeholders with sample data                   │
│                                                          │
│  You can add sample data for the placeholders in the     │
│  template.                                               │
│                                                          │
│  Message Body                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │  1                                    Static  ○    │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ Enter content for 1                          │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│           [Cancel]        [✓ Add Sample Data]            │
└──────────────────────────────────────────────────────────┘
\`\`\`

**Step 3:** For each variable in your template, you will see:

| Element | Description |
|---|---|
| Variable Number | The placeholder number (1, 2, 3...) |
| Static Toggle | Toggle switch (usually set to Static) |
| Input Field | Text field labeled "Enter content for 1" |

**Step 4:** Enter appropriate sample content for each variable.

**Example:** If your body is "This is for the {{1}} testing":

| Variable | Input Label | Sample Content |
|---|---|---|
| 1 | Enter content for 1 | John Smith |

**Step 5:** Click the green **"Add Sample Data"** button to save.

**Step 6:** Click **"Cancel"** to discard and return to the form.

### 7.4 WhatsApp Preview Panel

The right side of the dialog shows a live **WhatsApp Preview** that updates as you enter sample data. This helps you visualize how the final message will look to recipients.

### 7.5 Sample Data Best Practices

- Use realistic data that represents actual use cases
- Avoid placeholder text like "test" or "sample"
- Ensure sample data matches the expected format
- Include appropriate formatting (dates, numbers, etc.)

---

## 8. Submitting for Approval

### 8.1 Pre-Submission Checklist

Before submitting, ensure:

- [ ] All required fields are completed (Language, WABA ID, Category, Template Name, Body)
- [ ] Variables are numbered correctly
- [ ] Sample data has been added for all variables
- [ ] Message content complies with WhatsApp Business Policy
- [ ] No prohibited content (spam, misleading info, etc.)

### 8.2 Submission Process

**Step 1:** Review all template content for accuracy.

**Step 2:** Click the **"Submit for Approval"** button.

**Step 3:** A confirmation dialog may appear. Confirm your submission.

**Step 4:** The template will be sent to Meta for review.

### 8.3 Approval Timeline

| Category | Typical Approval Time |
|---|---|
| Utility | 24-48 hours |
| Marketing | 24-72 hours |
| Authentication | 24 hours |

### 8.4 Approval Statuses

| Status | Meaning |
|---|---|
| Pending | Submitted and awaiting Meta review |
| Approved | Template approved and ready for use |
| Rejected | Template was not approved (see reason) |
| Paused | Template temporarily disabled |

### 8.5 After Approval

Once approved:
- Template appears in your approved templates list
- You can use the template in campaigns
- Template can be selected when sending messages
- Analytics tracking becomes available

---

## 9. Template Best Practices

### 9.1 Content Guidelines

**Do:**
- Keep messages clear and concise
- Use proper grammar and spelling
- Include all necessary information
- Make the purpose of the message clear
- Use appropriate business language

**Don't:**
- Use all caps or excessive punctuation
- Include misleading or deceptive content
- Add unnecessary promotional content to utility messages
- Use vague or ambiguous language
- Include prohibited content (adult, violence, etc.)

### 9.2 Variable Usage

- Limit variables to what's necessary
- Ensure sufficient static text around variables
- Use variables for personalization, not entire messages
- Test with sample data before submitting

### 9.3 Naming Conventions

Use descriptive, organized template names:

| Good Names | Poor Names |
|---|---|
| order_shipped_notification | template1 |
| appointment_reminder_24h | test |
| password_reset_otp | msg |
| welcome_new_customer | abc123 |

---

## 10. Troubleshooting

### 10.1 Common Issues

#### Template Rejected

**Possible Causes:**

| Issue | Solution |
|---|---|
| Policy violation | Review WhatsApp Business Policy and revise content |
| Too many variables | Reduce variables or add more static text |
| Unclear purpose | Make the message intent more explicit |
| Marketing in Utility | Ensure category matches content type |

#### Variables Not Working

**Possible Causes:**

| Issue | Solution |
|---|---|
| Incorrect format | Use {{1}}, {{2}} format exactly |
| Skipped numbers | Number variables sequentially |
| Missing sample data | Add sample data for all variables |

#### Submission Failed

**Possible Causes:**

| Issue | Solution |
|---|---|
| Required field empty | Complete all mandatory fields |
| WABA not connected | Connect your WhatsApp Business Account |
| Network error | Check connection and retry |

### 10.2 Error Messages

| Error | Meaning | Action |
|---|---|---|
| "Template contains too many variables" | Variable ratio too high | Add more text or remove variables |
| "Template name already exists" | Duplicate name | Choose a unique name |
| "Invalid WABA ID" | Account not linked | Reconnect WhatsApp Business |
| "Required field missing" | Empty mandatory field | Complete all required fields |

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Messaging Service - Templates User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | Messaging Service > Templates |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
