export const chatiiDocs = `
# Chatii Module Documentation

---

## Table of Contents

1. [Overview](#1-overview)
2. [Navigation & Access](#2-navigation--access)
3. [Screen Layout](#3-chatii-screen-layout)
4. [Core Concepts](#4-core-concepts)
5. [User Stories & Scenarios](#5-user-stories--real-world-scenarios)
6. [Typical Workflows](#6-typical-workflows)
7. [Inbox Rules & Behavior](#7-inbox-rules--behavior)
8. [Best Practices](#8-best-practices)
9. [Troubleshooting](#9-common-issues--troubleshooting)
10. [Handover Checklist](#10-handover-checklist)

---

## 1. Overview

**Chatii** is Worksii's built-in inbox for managing two-way conversations with end users across supported channels. Based on the current UI, Chatii supports:

| Channel | Description |
|---|---|
| WhatsApp | Two-way WhatsApp conversations |
| SMS | Two-way SMS conversations |

Chatii is typically used by admins, support agents, or campaign operators to:

- View and respond to inbound messages
- Organize conversations into folders (e.g., Important, General)
- Monitor unread conversations and active queue size
- Maintain consistent customer communication during campaigns

> **Note:** The exact backend rules (assignment, SLA, auto-routing, message templates, retention) depend on your Worksii environment and configuration.

---

## 2. Navigation & Access

### 2.1 Menu Path

\`\`\`plaintext
Dashboard → Chatii
\`\`\`

### 2.2 Who Should Use Chatii

| User Type | Purpose |
|---|---|
| Support / Operations | Handling inbound customer communication |
| Admin | Supervising channels and configuration |
| QA | Validating conversation workflow and reliability |

### 2.3 Access Model

There is **no role-based permission or RBAC** implemented in Chatii at present.

- Any user who can access the Worksii dashboard can access Chatii
- All users can view conversations, reply, create folders, and move conversations

> This document reflects the **current system behavior only**. Permission models are not applicable right now.

---

## 3. Chatii Screen Layout

### 3.1 Header Area

| Element | Description |
|---|---|
| Module Title | "Chatii" |
| Connectivity Status | "Online" indicator |

**What "Online" means:**
- Worksii can currently communicate with the configured messaging channel provider(s)
- The client session/token is active (especially for WhatsApp)

> **Operational Note:** "Online" does not always guarantee message delivery—delivery can still fail due to provider-side issues, account limits, or template restrictions.

### 3.2 Search Bar

The **Search chats** input allows you to:
- Find a conversation by contact name/number
- Search by last message keyword (if enabled)

**Search may cover:**
- Contact name
- Phone number
- Message content
- Conversation ID

### 3.3 Channel Tabs

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Chatii                                        ● Online     │
├─────────────────────────────────────────────────────────────┤
│  🔍 Search chats...                                         │
├─────────────────────────────────────────────────────────────┤
│  [ WhatsApp ]  [ SMS ]                                      │
├─────────────────────────────────────────────────────────────┤
│  Folders                                              [+]   │
│  ├── Important                                    (15)      │
│  └── General                                    (1934)      │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Behavior:**
- Selecting a tab filters the inbox to that channel only
- Unread counts and folder counts apply to the selected channel

**Handover Notes:**
- If WhatsApp uses a sender configuration, confirm the sender ID/account connected
- If SMS uses a gateway, confirm the SMS provider configuration

### 3.4 Folder Panel

| Element | Description |
|---|---|
| Folders Section | Contains all available folders |
| Important | System folder for unreplied messages |
| General | System folder for replied conversations |
| + Button | Create new custom folder |
| Badge Count | Number of conversations in folder |

---

## 4. Core Concepts

### 4.1 What is a Conversation?

A conversation is a thread of messages between:
- A customer (or recipient) and
- Your Worksii messaging channel (WhatsApp/SMS sender)

**A conversation typically has:**

| Property | Description |
|---|---|
| Contact Identifier | Phone number |
| Channel Type | WhatsApp or SMS |
| Message Timeline | Inbound and outbound messages |
| Reply Status | Replied / Not Replied |

### 4.2 Default Folders

Chatii has **two system default folders** that are always available:

#### Important (Default System Folder)

- Automatically lists **unreplied inbound messages**
- Any new inbound message that has **not yet received a reply** appears here
- Designed for **priority handling and agent attention**

**Key Behavior:**
- If a message is **not replied**, it stays in Important
- Once an agent **replies**, it is automatically removed from Important

#### General (Default System Folder)

- Contains **all replied or normal conversations**
- Once a conversation is replied to, it moves automatically from Important → General
- Acts as the main archive/working folder for conversations

> **Important:** Agents do not manually move messages out of Important after replying. The system handles this transition automatically.

---

## 5. User Stories & Real-World Scenarios

### User Story 1: Handling a New Inbound Message

**As a support agent**, I want to immediately see all unreplied inbound messages, **so that no customer message is missed**.

**System Behavior:**

\`\`\`plaintext
1. Customer sends message via WhatsApp/SMS
              ↓
2. Conversation is automatically created
              ↓
3. Message appears in Important folder
              ↓
4. Important folder count increases
\`\`\`

**Outcome:** Agent knows exactly which messages need attention.

### User Story 2: Replying to a Message

**As a support agent**, when I reply to a customer message, I want the conversation to be removed from the priority queue automatically.

**System Behavior:**

\`\`\`plaintext
1. Agent opens conversation from Important
              ↓
2. Agent sends a reply
              ↓
3. System moves conversation to General
              ↓
4. Important count decreases
5. General count increases
\`\`\`

**Outcome:** Important always shows only pending/unanswered messages.

### User Story 3: Using Custom Folders

**As an operator**, I want to group conversations by context (e.g., Billing, Escalation), **so that follow-ups are easier**.

**System Behavior:**
1. User clicks the **+** button in Folders
2. Creates a custom folder
3. Moves selected conversations into the custom folder

**Outcome:** Conversations are logically organized for faster handling.

### User Story 4: Daily Inbox Triage

**As a support agent**, I want a simple daily workflow to manage large volumes of messages.

**Recommended Flow:**

| Step | Action |
|---|---|
| 1 | Open Chatii |
| 2 | Select channel (WhatsApp/SMS) |
| 3 | Start with Important folder |
| 4 | Reply to all pending messages |
| 5 | Review General for follow-ups |
| 6 | Move special cases to custom folders |

**Outcome:** Zero pending messages, clean and predictable inbox.

---

## 6. Typical Workflows

### 6.1 Search for a Chat

**Step 1:** Click the **Search chats** input.

**Step 2:** Type a phone number, name, or keyword.

**Step 3:** Press Enter / wait for results.

**Expected Result:** Matching conversations are displayed.

**If No Results:**
- Check if search is limited to the selected channel
- Check if the conversation exists in a different folder

### 6.2 Use Folders for Triage

**Step 1:** Click **Important** to view prioritized conversations.

**Step 2:** Click **General** to view the default queue.

**Best Practice:** Start from Important first, then process General.

### 6.3 Create a New Folder

**Step 1:** Click the **+ (Plus)** icon beside the Folders section.

**Step 2:** Enter a **Folder Name** (e.g., Escalations, Follow-Up, Billing).

**Step 3:** Save/Create the folder.

**Expected Result:**
- The new folder appears in the folder list
- Folder is available for manual conversation organization

### 6.4 Move Conversation to Folder

**Step 1:** Open or select a conversation.

**Step 2:** Choose the destination folder.

**Step 3:** Confirm the move action.

**Expected Result:** Conversation appears in the new folder.

---

## 7. Inbox Rules & Behavior

### 7.1 Automatic Folder Logic

**Important & General** are system-defined default folders. Folder behavior is driven by **reply status**, not manual action.

| Trigger | Action |
|---|---|
| New inbound message | Appears in Important |
| Message is replied to | Automatically moves to General |
| No reply | Remains in Important |

This ensures:
- Unanswered messages are never missed
- Agents can prioritize replies easily

### 7.2 Manual Folder Management

In addition to system folders, agents can create **custom folders** and manually organize conversations.

**Manual Actions Supported:**
- Create new folders using the + button
- Move conversations into any custom folder
- Rename or delete custom folders

**Common Use Cases:**

| Folder Name | Purpose |
|---|---|
| Escalations | High-priority issues |
| Payment Issues | Billing-related conversations |
| Campaign-Specific | Conversations from specific campaigns |
| Follow-Ups | Messages requiring later action |

### 7.3 Unread & Count Behavior

| Folder | Count Behavior |
|---|---|
| Important | Decreases automatically after replies |
| General | Increases as conversations are replied |
| Custom | Manual count based on moved conversations |

---

## 8. Best Practices

### 8.1 Operational Best Practices

| Practice | Benefit |
|---|---|
| Keep Important for real escalations only | Faster response to urgent issues |
| Create folder taxonomy aligned to business needs | Organized conversation management |
| Clear high-volume General backlog regularly | Prevent inbox overload |
| Monitor connectivity/online status during campaigns | Early detection of issues |

### 8.2 QA Best Practices

| Test Area | What to Validate |
|---|---|
| Message ordering | Messages appear in correct sequence |
| Duplication handling | No duplicate messages shown |
| Unread count accuracy | Counts match actual unread messages |
| Folder updates | Changes reflected in real time |
| Search results | Results match expected scope |

---

## 9. Common Issues & Troubleshooting

### Issue A: Status Shows Offline

**Possible Causes:**
- WhatsApp sender disconnected
- SMS gateway down
- Token/session expired

**Solution:**

| Step | Action |
|---|---|
| 1 | Check Sender Configuration (WhatsApp/SMS) |
| 2 | Reconnect/re-authenticate channel (admin action) |
| 3 | Check network and provider status |

### Issue B: Messages Not Appearing

**Possible Causes:**
- Channel webhook not receiving events
- Filter applied (wrong channel tab or folder)

**Solution:**

| Step | Action |
|---|---|
| 1 | Switch tabs (WhatsApp ↔ SMS) |
| 2 | Check General folder |
| 3 | Validate provider logs / webhook status |

### Issue C: Counts Are Incorrect

**Possible Causes:**
- Cache not refreshed
- Pagination not updating
- Backend count job delayed

**Solution:**

| Step | Action |
|---|---|
| 1 | Refresh page |
| 2 | Validate counts by manual sampling |
| 3 | Report bug with steps + expected vs actual |

### Issue D: Cannot Create Folder

**Possible Causes:**
- Maximum folder limit reached
- Network connectivity issue

**Solution:**
- Delete unused folders
- Refresh the page and try again

---

## 10. Handover Checklist

### For New Administrators

Use this checklist when onboarding to Chatii:

| Task | Status |
|---|---|
| Confirm you can access Chatii | ☐ |
| Verify channel tabs load (WhatsApp/SMS) | ☐ |
| Check Online status behavior | ☐ |
| Understand folder meaning (General vs Important) | ☐ |
| Confirm ability to create folders | ☐ |
| Validate search scope | ☐ |
| Review how unread counts are calculated | ☐ |
| Confirm where channel configuration is managed | ☐ |

### QA Test Coverage

**Smoke Tests:**
- Open Chatii page → loads without errors
- Switch WhatsApp/SMS tabs → list updates
- Search chats → returns results

**Functional Tests:**
- Folder selection changes conversation list
- Create folder and verify it persists after refresh
- Verify unread count increases on new inbound message

**Edge Tests:**
- Offline scenario handling
- Large volume folder performance (1,000+ conversations)
- Search special characters / partial numbers

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Chatii Module User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | Chatii |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
