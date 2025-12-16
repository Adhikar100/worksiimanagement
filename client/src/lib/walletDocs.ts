export const walletDocs = `
# Wallet Transactions Documentation

---

## Table of Contents

1. [What is the Wallet?](#1-what-is-the-wallet-in-worksii)
2. [Why Wallet Transactions Are Critical](#2-why-wallet-transactions-are-critical)
3. [Navigation & Page Layout](#3-navigation--page-layout)
4. [Wallet Summary Cards](#4-wallet-summary-cards)
5. [Add Funds](#5-add-funds)
6. [Filter Transactions](#6-filter-transactions)
7. [Transactions Table](#7-wallet-transactions-table)
8. [How Withdrawals Work](#8-how-withdrawals-actually-happen)
9. [Auto Top-Up Relationship](#9-relationship-with-auto-top-up)
10. [User Stories](#10-real-user-stories)
11. [Best Practices](#11-best-practices)

---

## 1. What is the Wallet in Worksii?

The **Worksii Wallet** is a **central prepaid balance** used by the system to pay for all chargeable activities such as:

| Activity | Description |
|---|---|
| Campaign Execution | Running messaging campaigns |
| WhatsApp Messages | Sending WhatsApp messages |
| SMS Sending | Sending SMS messages |
| Other Services | Other paid messaging or service usage |

Instead of charging per action in real time from a card or bank, Worksii **deducts costs from the wallet balance**. This design ensures:

- Faster message processing
- Better cost control
- Clear financial audit trails

The **Wallet Transactions** module is the **single source of truth** for understanding how money moves in and out of this wallet.

---

## 2. Why Wallet Transactions Are Critical

For a new admin, this module answers key operational questions:

| Question | Answer Found In |
|---|---|
| How much money has been added? | Total Deposits card |
| How much money has been spent? | Total Withdrawals card |
| Why did a campaign stop? | Transaction history |
| Did a payment fail or succeed? | Status column |
| Is auto top-up working? | Transaction records |

> **Important:** If something goes wrong with campaigns or messaging, **Wallet Transactions is always the first place to check**.

---

## 3. Navigation & Page Layout

### 3.1 Navigation Path

\`\`\`plaintext
Dashboard → Wallet Transactions
\`\`\`

### 3.2 Page Structure Overview

The page is divided into four logical sections:

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Wallet Transactions                         [Add Funds]    │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐│
│  │  Total     │ │  Total     │ │ Successful │ │  Failed    ││
│  │  Deposits  │ │ Withdrawals│ │ Transactions││ Transactions││
│  │   $913     │ │   $450     │ │    45      │ │    2       ││
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘│
├─────────────────────────────────────────────────────────────┤
│  Filter Transactions                                        │
│  From: [Date] To: [Date] Status: [All ▼] Type: [All ▼]     │
│                              [Clear All] [Apply Filters]    │
├─────────────────────────────────────────────────────────────┤
│  SN │ Amount  │ Date       │ Method │ Status   │ Type      │
│  1  │ +$100   │ 2024-12-01 │ Stripe │ Succeeded│ Deposit   │
│  2  │ -$25    │ 2024-12-01 │ -      │ Succeeded│ Withdrawal│
│  3  │ -$15    │ 2024-12-02 │ -      │ Succeeded│ Withdrawal│
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 4. Wallet Summary Cards

These cards give an **instant financial snapshot** without needing to read individual transactions.

### 4.1 Total Deposits

**What it means:**
- The total amount of money that has been **successfully added** to the wallet

**Why it matters:**
- Confirms how much funding the system has received
- Useful for finance reconciliation

**Example:**
- If Total Deposits = $913
- That means $913 has been successfully credited to the wallet

### 4.2 Total Withdrawals

**What it means:**
- The total amount **spent from the wallet**

**What causes withdrawals:**

| Cause | Description |
|---|---|
| Campaign Execution | Running messaging campaigns |
| Message Sending | WhatsApp/SMS delivery |
| System Charges | System-initiated charges |

> **Important:** Withdrawals are usually **automatic**, not manually triggered.

### 4.3 Successful Transactions

**What it means:**
- Total number and value of transactions that completed successfully
- Includes both deposits and withdrawals

**Why it matters:**
- Confirms that the system and payment gateways are working normally

### 4.4 Failed Transactions

**What it means:**
- Number and value of transactions that failed

**Common reasons:**

| Reason | Description |
|---|---|
| Payment Gateway Error | Gateway processing issue |
| Network Timeout | Connection failure |
| Insufficient Balance | Not enough funds |
| Invalid Configuration | Setup issues |

> **Key Rule:** Failed transactions **do NOT change the wallet balance**.

---

## 5. Add Funds

Adding funds is the **primary and only manual process** to increase the Worksii wallet balance. This process is usually performed by an **admin or finance user** before running campaigns or when the wallet balance is low.

Think of the wallet like a **prepaid balance**. If there is no money in the wallet, campaigns and messages **cannot run**.

### 5.1 When Should You Add Funds?

You should add funds when:

| Situation | Action Needed |
|---|---|
| First-time setup | Add initial funds |
| Low or zero balance | Top up before campaigns |
| Large campaign planned | Ensure sufficient balance |
| Auto Top-Up disabled/failed | Manual top-up required |

> **Best Practice:** Add funds before the wallet reaches zero.

### 5.2 Step-by-Step Add Funding Flow

#### Step 1: Click "Add Funds"

- Located at the **top-right corner** of the Wallet Transactions page
- This opens the Add Funds form

#### Step 2: Enter Funding Amount

- Enter the amount you want to add to the wallet
- This is the **credit amount** that will increase your wallet balance
- Only numeric values are allowed

**Example:** Entering \`100\` means you want to add $100 to the wallet.

#### Step 3: Select Payment Method

- Choose the payment method from the dropdown
- Currently supported: **Stripe**

Stripe is a secure third-party payment gateway used to process the payment.

#### Step 4: Click "Next"

- Clicking **Next** confirms the entered amount and payment method
- You are then redirected to the **Stripe payment page**

#### Step 5: Stripe Payment Page

On the Stripe page:
- Enter card or payment details (as required by Stripe)
- Review the payment amount
- Click **Pay Now** to complete the payment

You may also:
- Cancel the payment
- Go back without completing payment

#### Step 6: Return to Worksii

After Stripe processing:
- If payment is successful, you are redirected back to Worksii automatically
- Or you may manually navigate back to the Worksii application

### 5.3 Add Funds Form

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Add Funds                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Amount *                                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 100                                                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Payment Method *                                           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Stripe                                              ▼   ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│                    [Cancel]  [Next]                         │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 5.4 What Happens If Payment Is Successful?

When Stripe confirms a successful payment:

| Action | Result |
|---|---|
| Deposit Transaction Created | New record in table |
| Status Set | Succeeded |
| Wallet Balance | Immediately increased |
| Total Deposits Card | Updated |

> **Very Important:** Wallet balance updates **only after Stripe confirms success**.

### 5.5 What Happens If Payment Fails?

If the payment fails or is cancelled:

| Situation | Result |
|---|---|
| Card/Network Issue | No money added |
| User Cancels | Balance unchanged |
| User Clicks Back | Failed transaction recorded |

This ensures:
- No incorrect balance increase
- Full financial accuracy

### 5.6 Verification Checklist

After completing Add Funds, always verify:

| Check | Expected Result |
|---|---|
| Wallet balance | Has increased |
| New transaction | Appears in table |
| Transaction Type | Deposit |
| Transaction Status | Succeeded |
| Total Deposits card | Updated |

> If any of the above is missing, investigate before running campaigns.

### 5.7 Common Mistakes During Add Funds

| Mistake | Problem |
|---|---|
| Wrong amount entered | Incorrect funding |
| Closing browser during payment | Transaction incomplete |
| Not checking status | Assuming success |
| Running campaigns immediately | Balance may not be updated |

---

## 6. Filter Transactions

The filter panel helps narrow down large transaction lists.

### 6.1 From Date & To Date

Used to limit transactions to a specific time period.

**Very useful for:**
- Daily checks
- Monthly finance reports
- Incident investigation

### 6.2 Status Filter

| Option | Shows |
|---|---|
| All Status | All transactions |
| Succeeded | Only successful transactions |
| Failed | Only failed transactions |

**Usage Example:** Select **Failed** to investigate payment issues.

### 6.3 Transaction Type Filter

| Option | Shows |
|---|---|
| All Types | All transaction types |
| Deposit | Only money added |
| Withdrawal | Only money spent |

**Usage Example:** Select **Withdrawal** to understand campaign costs.

### 6.4 Filter Actions

| Button | Function |
|---|---|
| Apply Filters | Shows filtered results |
| Clear All | Resets filters to default |

---

## 7. Wallet Transactions Table

Each row in the table represents **one financial event**.

### 7.1 Table Columns Explained

| Column | Description |
|---|---|
| SN | Serial number for easy reference |
| Amount | Positive (+$10) = Deposit, Negative (-$4) = Withdrawal |
| Date | Exact date and time of transaction |
| Method | Payment method used (may be blank for withdrawals) |
| Status | Succeeded or Failed |
| Type | Deposit or Withdrawal |

### 7.2 Understanding Amount Values

| Value | Meaning |
|---|---|
| +$100 | $100 was added to wallet |
| -$25 | $25 was deducted from wallet |

### 7.3 Understanding Status

| Status | Meaning |
|---|---|
| Succeeded | Transaction completed successfully |
| Failed | Transaction did not complete |

---

## 8. How Withdrawals Actually Happen

Withdrawals are usually **not manual**. They occur when:

| Trigger | Description |
|---|---|
| Campaign Execution | Running a messaging campaign |
| Messages Sent | WhatsApp/SMS delivery |
| Paid Services | System service consumption |

**Key Behavior:**
- The system deducts cost automatically
- Each deduction is logged as a withdrawal
- Multiple withdrawals may appear close together during active campaigns

---

## 9. Relationship with Auto Top-Up

If **Auto Top-Up** is enabled (configured in General Configuration):

\`\`\`plaintext
1. Wallet balance drops below threshold
              ↓
2. System triggers auto deposit
              ↓
3. Deposit appears as Succeeded/Failed transaction
              ↓
4. Campaigns continue without interruption (if successful)
\`\`\`

**If Auto Top-Up Fails:**
- Wallet balance remains low
- Campaigns may fail
- Failed transaction will appear in Wallet Transactions

---

## 10. Real User Stories

### User Story 1: Campaign Suddenly Stops

**Question:** Why did messages stop?

**Investigation Steps:**

| Step | Action |
|---|---|
| 1 | Open Wallet Transactions |
| 2 | Check recent withdrawals |
| 3 | Check wallet balance |
| 4 | Look for failed deposits |

### User Story 2: Finance Reconciliation

**Question:** How much did we spend last week?

**Investigation Steps:**

| Step | Action |
|---|---|
| 1 | Filter by date range |
| 2 | Filter by Withdrawal |
| 3 | Sum withdrawal amounts |

### User Story 3: Investigating Failures

**Question:** Why are payments failing?

**Investigation Steps:**

| Step | Action |
|---|---|
| 1 | Filter by Status = Failed |
| 2 | Check method and timing |
| 3 | Correlate with gateway logs |

---

## 11. Best Practices

### 11.1 Operational Best Practices

| Practice | Benefit |
|---|---|
| Check wallet balance daily during campaigns | Early warning of low funds |
| Monitor failed transactions immediately | Quick issue resolution |
| Keep sufficient buffer balance | Prevent campaign interruption |
| Review withdrawals after large campaigns | Cost verification |

### 11.2 Common Admin Mistakes

| Mistake | Consequence |
|---|---|
| Ignoring failed transactions | Missed payment issues |
| Running campaigns with low balance | Campaign failure |
| Not checking withdrawal spikes | Unexpected costs |
| Assuming system bugs | Often wallet-related |

### 11.3 QA Validation Scenarios

| Test | Expected Result |
|---|---|
| Deposit | Wallet balance increases |
| Withdrawal | Wallet balance decreases |
| Failed transaction | Balance unchanged |
| Filter application | Correct records shown |

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Wallet Transactions User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | Wallet Transactions |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
