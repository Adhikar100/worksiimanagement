export const campaignDocs = `
# Campaign - Static Campaign Documentation

---

## Table of Contents

1. [Introduction to Campaigns](#1-introduction-to-campaigns)
2. [Accessing Static Campaigns](#2-accessing-static-campaigns)
3. [Creating a New Static Campaign](#3-creating-a-new-static-campaign)
4. [Step 1: Campaign Details](#4-step-1-campaign-details)
5. [Step 2: Data Source Configuration](#5-step-2-data-source-configuration)
6. [Step 3: Template Selection](#6-step-3-template-selection)
7. [Step 4: Scheduling Options](#7-step-4-scheduling-options)
8. [Saving and Launching Campaign](#8-saving-and-launching-campaign)
9. [Campaign Management](#9-campaign-management)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Introduction to Campaigns

### 1.1 What is a Campaign?

A Campaign in Worksii allows you to send bulk messages to multiple recipients using pre-approved templates. Campaigns automate the process of sending personalized messages at scale.

### 1.2 Campaign Types

| Type | Description |
|---|---|
| Static | Send messages to a fixed list of recipients from a data source |
| Dynamic | Send messages based on real-time triggers and events |

### 1.3 Why Use Static Campaigns

- **Bulk Messaging:** Send messages to thousands of recipients at once
- **Scheduled Delivery:** Set specific date and time for message delivery
- **Recurring Campaigns:** Set up daily, weekly, monthly, or yearly recurring messages
- **Data Integration:** Import recipient data from CSV files or Google Sheets
- **Template-Based:** Use pre-approved WhatsApp templates for consistent messaging

---

## 2. Accessing Static Campaigns

### 2.1 Navigation Path

To access the Static Campaigns section:

**Step 1:** Log in to your Worksii account.

**Step 2:** In the left sidebar, locate and click on **"Campaign"**.

**Step 3:** The Campaign menu will expand to show submenu items.

**Step 4:** Click on **"Static"** to access the static campaign management page.

### 2.2 Navigation Summary

\`\`\`plaintext
Sidebar > Campaign > Static
\`\`\`

### 2.3 Static Campaign Page Overview

The Static Campaign page displays:

| Element | Description |
|---|---|
| Campaign List | All existing static campaigns |
| Create New Button | Button to create a new campaign (green) |
| Search Bar | Search for specific campaigns |
| Filter Options | Filter campaigns by status or date |

---

## 3. Creating a New Static Campaign

### 3.1 Starting the Creation Process

**Step 1:** Navigate to **Campaign > Static**.

**Step 2:** Click the green **"Create New"** button in the top right corner.

**Step 3:** Select your **WhatsApp Business Account** from the selection dialog.

**Step 4:** The campaign creation form will open with multiple steps.

### 3.2 Campaign Creation Flow

The campaign creation process consists of the following steps:

\`\`\`plaintext
Step 1: Campaign Details
        ↓
Step 2: Data Source Configuration  
        ↓
Step 3: Template Selection
        ↓
Step 4: Scheduling Options
        ↓
Save & Launch
\`\`\`

---

## 4. Step 1: Campaign Details

### 4.1 Campaign Name

**Field:** Campaign Name *

**Purpose:** A unique identifier for your campaign.

**Step 1:** Click on the **"Campaign Name"** input field.

**Step 2:** Enter a descriptive name for your campaign.

**Examples:**
- Adhikar Birthday
- Holiday_Promotion_2025
- Customer_Welcome_Messages
- Monthly_Newsletter_Dec

**Naming Guidelines:**
- Use descriptive names that identify the campaign purpose
- Include date or version if running multiple similar campaigns
- Avoid special characters that may cause issues

### 4.2 WhatsApp Business Account Selection

**Field:** WhatsApp Business Account *

**Purpose:** Links the campaign to your WABA for sending messages.

**Step 1:** The selected WABA phone number will be displayed (e.g., "+44 7717 890478").

**Step 2:** Confirm the correct account is selected.

**Step 3:** Click **"Next"** to proceed to data source configuration.

---

## 5. Step 2: Data Source Configuration

### 5.1 Data Source Options

After clicking Next, you'll need to configure where your recipient data comes from:

| Source | Description |
|---|---|
| Google Sheet | Connect to a Google Spreadsheet containing recipient data |
| CSV File | Upload or select a CSV file with recipient information |

### 5.2 Using Google Sheet

**Step 1:** Click on the **"Google Sheet"** tab.

**Step 2:** Connect your Google account if not already connected.

**Step 3:** Select the spreadsheet containing your recipient data.

**Step 4:** Map the columns to the required fields.

### 5.3 Using CSV File

**Step 1:** Click on the **"CSV File"** tab.

**Step 2:** Either upload a new CSV or select from existing data sources.

**Step 3:** Select from the dropdown list of available data sources:
- Example: AdhTest162517, AdhTest111243, AdhTest000434, etc.

### 5.4 Download Sample CSV

To understand the required CSV format:

**Step 1:** Click the **"Download Sample CSV"** button.

**Step 2:** A sample CSV file will be downloaded showing the required columns.

**Step 3:** Use this as a template to prepare your recipient data.

**Sample CSV Format:**
\`\`\`csv
phone_number,name,variable_1,variable_2
+1234567890,John Smith,Value1,Value2
+0987654321,Jane Doe,Value1,Value2
\`\`\`

---

## 6. Step 3: Template Selection

### 6.1 Selecting a Template

**Field:** Template *

**Purpose:** Choose the pre-approved WhatsApp template for this campaign.

**Step 1:** Click on the template dropdown selector.

**Step 2:** Choose from your approved templates:
- hello_template_2
- test_template_1
- test_template_124
- adhikarmarketting
- And more...

**Step 3:** The selected template will be previewed.

### 6.2 WhatsApp Preview

A **WhatsApp Preview** panel will display on the right side showing:

- How the message will appear on recipient's phone
- The template content with variable placeholders
- Header, body, footer, and buttons (if configured)

### 6.3 Variable Mapping

If your template contains variables ({{1}}, {{2}}, etc.):

**Step 1:** Map each variable to a column from your data source.

**Step 2:** Ensure all variables are properly mapped.

**Step 3:** Preview the message with sample data.

---

## 7. Step 4: Scheduling Options

### 7.1 Timezone Selection

**Field:** Timezone *

**Purpose:** Set the timezone for scheduled delivery.

**Step 1:** Click on **"Select a timezone"** button.

**Step 2:** Search for your timezone (e.g., type "kath" to find Kathmandu).

**Step 3:** Select your timezone from the results:
- Example: (UTC+05:45) Asia/Kathmandu - Kathmandu, Bharatpur, Pātan

### 7.2 Scheduled Date and Time

**Field:** Scheduled Date and Time

**Purpose:** Set when the campaign messages should be sent.

**Step 1:** Click on the date/time picker.

**Step 2:** Select the date from the calendar.

**Step 3:** Set the time for delivery.

**Example:** 12/03/2025 01:52 PM

**Note:** Schedule will run once at the specified date and time.

### 7.3 Repeat Options

You can configure campaigns to repeat automatically:

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  [Schedule Message] [Repeat Daily] [Repeat Weekly]          │
│  [Repeat Monthly] [Repeat Yearly]                           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

| Option | Description |
|---|---|
| Schedule Message | Send once at the scheduled date/time |
| Repeat Daily | Send every day at the specified time |
| Repeat Weekly | Send on selected days every week |
| Repeat Monthly | Send on a specific day each month |
| Repeat Yearly | Send on a specific date each year |

### 7.4 Repeat Daily Configuration

**Step 1:** Click **"Repeat Daily"** tab.

**Step 2:** Set the time for daily delivery.

**Step 3:** Optionally set an end date for the recurring campaign.

### 7.5 Repeat Weekly Configuration

**Step 1:** Click **"Repeat Weekly"** tab.

**Step 2:** Select the days of the week to send messages.

**Step 3:** Set the time for delivery.

### 7.6 Repeat Monthly Configuration

**Step 1:** Click **"Repeat Monthly"** tab.

**Step 2:** Select the day of the month (1st, 2nd, 3rd, ... 31st).

**Step 3:** Set the time for delivery.

### 7.7 Repeat Yearly Configuration

**Step 1:** Click **"Repeat Yearly"** tab.

**Step 2:** Select the month (January - December).

**Step 3:** Select the day of the month.

**Step 4:** Set the time for delivery.

**Example:** December 3rd at 2:00 PM every year.

---

## 8. Saving and Launching Campaign

### 8.1 Review Before Saving

Before saving, verify:

- [ ] Campaign name is descriptive and unique
- [ ] Correct WhatsApp Business Account is selected
- [ ] Data source is properly configured
- [ ] Template is selected and variables are mapped
- [ ] Timezone is correct
- [ ] Schedule date/time is set appropriately

### 8.2 Saving the Campaign

**Step 1:** Review all campaign settings.

**Step 2:** Click the **"Save"** button.

**Step 3:** Wait for the campaign to be processed.

### 8.3 Success Confirmation

Upon successful save, you will see:

\`\`\`plaintext
┌─────────────────────────────────────────────┐
│                                             │
│   Message queued for delivery via Meta      │
│                                             │
└─────────────────────────────────────────────┘
\`\`\`

This confirms your campaign has been:
- Successfully created
- Queued for delivery through Meta's WhatsApp Business API
- Scheduled to run at the specified time

---

## 9. Campaign Management

### 9.1 Viewing Campaigns

Navigate to **Campaign > Static** to view all your campaigns.

The campaign list shows:

| Column | Description |
|---|---|
| Campaign Name | The name you assigned |
| Template | The template being used |
| Status | Pending, Running, Completed, Failed |
| Schedule | When the campaign is scheduled to run |
| Recipients | Number of recipients |
| Actions | Edit, Pause, Delete options |

### 9.2 Campaign Statuses

| Status | Meaning |
|---|---|
| Pending | Campaign created but not yet running |
| Scheduled | Campaign scheduled for future delivery |
| Running | Campaign currently sending messages |
| Completed | All messages have been sent |
| Paused | Campaign temporarily stopped |
| Failed | Campaign encountered an error |

### 9.3 Editing a Campaign

**Step 1:** Find the campaign in the list.

**Step 2:** Click the **"Edit"** button.

**Step 3:** Modify the campaign settings.

**Step 4:** Click **"Save"** to apply changes.

**Note:** Some settings may not be editable once a campaign has started running.

### 9.4 Pausing a Campaign

**Step 1:** Find the running campaign.

**Step 2:** Click the **"Pause"** button.

**Step 3:** The campaign will stop sending messages.

**Step 4:** You can resume later by clicking **"Resume"**.

---

## 10. Troubleshooting

### 10.1 Common Issues

#### Campaign Not Sending

| Issue | Solution |
|---|---|
| Timezone mismatch | Verify the correct timezone is selected |
| Past schedule time | Set a future date/time |
| Template not approved | Ensure template status is "Approved" |
| Data source empty | Check your CSV/Google Sheet has data |

#### Variable Mapping Errors

| Issue | Solution |
|---|---|
| Missing variables | Map all template variables to data columns |
| Wrong column mapping | Re-map variables to correct columns |
| Empty values | Ensure all rows have values for variables |

#### Data Source Issues

| Issue | Solution |
|---|---|
| CSV upload failed | Check file format and size |
| Google Sheet not found | Reconnect Google account |
| Invalid phone numbers | Ensure numbers are in international format |

### 10.2 Error Messages

| Error | Meaning | Action |
|---|---|---|
| "Invalid recipient" | Phone number format issue | Use international format (+1234567890) |
| "Template not found" | Template was deleted/rejected | Select a different approved template |
| "Insufficient balance" | Not enough credits | Add credits to your wallet |
| "Rate limit exceeded" | Too many messages | Wait and try again later |

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Campaign - Static Campaign User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | Campaign > Static |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
