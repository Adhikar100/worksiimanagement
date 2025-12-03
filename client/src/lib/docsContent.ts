export const docsContent = `
# Worksii User Management - Comprehensive User Manual

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Accessing User Management](#2-accessing-user-management)
3. [Understanding the User List Interface](#3-understanding-the-user-list-interface)
4. [Adding a New User](#4-adding-a-new-user)
5. [Managing User Status](#5-managing-user-status)
6. [Editing User Information](#6-editing-user-information)
7. [User Roles and Permissions](#7-user-roles-and-permissions)
8. [Field Specifications and Validation](#8-field-specifications-and-validation)
9. [Navigation and Interface Elements](#9-navigation-and-interface-elements)
10. [Troubleshooting Guide](#10-troubleshooting-guide)
11. [Best Practices](#11-best-practices)
12. [Frequently Asked Questions](#12-frequently-asked-questions)


---

## 1. Introduction

### 1.1 Purpose

The User Management module is a core administrative feature within the Worksii platform that enables organizations to manage team member accounts, control system access, and maintain security through role-based permissions.

### 1.2 Who Should Use This Module

This module is intended for:

- **System Administrators** who need to create and manage user accounts
- **Team Leads** who require visibility into team member access levels
- **Operations Managers** responsible for onboarding and offboarding staff


### 1.3 Key Capabilities

The User Management module provides the following capabilities:

- Create new user accounts with complete profile information
- Assign roles that determine system access levels
- Activate or deactivate user accounts without permanent deletion
- Edit existing user information as organizational needs change
- View a comprehensive list of all users in the system


---

## 2. Accessing User Management

### 2.1 Prerequisites

Before accessing User Management, ensure that:

- You have valid login credentials for the Worksii platform
- Your account has been assigned the Admin role
- You have an active internet connection


### 2.2 Step-by-Step Access Instructions

**Step 1:** Open your web browser and navigate to:

\`\`\`plaintext
https://dev.worksii.com/customer/user-management
\`\`\`

**Step 2:** If not already logged in, enter your credentials on the login page.

**Step 3:** Once logged in, locate the left sidebar navigation panel.

**Step 4:** In the sidebar, find and click on **"User Management"** to expand the submenu.

**Step 5:** Click on the **"User Management"** submenu item to load the user list page.

### 2.3 Navigation Path Summary

\`\`\`plaintext
Login > Dashboard > Sidebar > User Management > User Management (submenu)
\`\`\`

---

## 3. Understanding the User List Interface

### 3.1 Page Layout Overview

The User Management page is divided into the following sections:

| Section | Location | Description |
|---|---|---|
| Header Bar | Top | Contains search, wallet balance, and profile options |
| Sidebar | Left | Main navigation menu for all Worksii modules |
| Page Title | Top Center | Displays "User Management" heading |
| Action Button | Top Right | "Add New" button to create users |
| User Table | Center | List of all users with their details |
| Pagination | Bottom | Controls for navigating through user pages |


### 3.2 User Table Columns

The user list table displays the following information for each user:

**Column 1: User Full Name**

- Displays the complete legal name of the user
- This is the name used for identification and records
- Example: "Adh Adhikar Chaudhary"


**Column 2: Display Name**

- Shows the name visible throughout the Worksii interface
- Can be a shortened version or nickname
- This appears in chat interfaces and activity logs
- Example: "Adh Adhikar Chaudhary"


**Column 3: Email**

- The user's email address
- Serves as the primary login credential
- Used for password reset and notifications
- Example: "adhadhikarpartner@yopr" or "adhadhikarpartne111r@y"


**Column 4: Phone**

- Contact phone number with international country code
- Format: (+CountryCode) PhoneNumber
- Example: "(+977) 9812345678"


**Column 5: Role**

- The assigned permission level for the user
- Determines what features and data the user can access
- Values: "Admin" or "Agent"


**Column 6: Status**

- Interactive toggle switch showing account status
- Green/On position = Active (user can log in)
- Gray/Off position = Inactive (user cannot log in)


**Column 7: Actions**

- Contains the "Edit" button to modify user details
- Clicking opens the user edit form


---

## 4. Adding a New User

### 4.1 Overview

Adding a new user creates an account that allows a team member to access the Worksii platform. This process involves entering personal information, contact details, and assigning an appropriate role.

### 4.2 Initiating the Add User Process

**Step 1:** Navigate to the User Management page (see Section 2).

**Step 2:** Locate the **"Add New"** button in the top-right corner of the page.

**Step 3:** Click on the **"Add New"** button. A new form will appear for entering user details.

### 4.3 Selecting the Country Code

The country code selection is required for properly formatting the user's phone number.

**Step 1:** Locate the **"Select a country"** dropdown field at the top of the form.

**Step 2:** Click on the dropdown to open the country selection menu.

**Step 3:** You can either:

- Scroll through the list to find your country, OR
- Type the country name in the search field (e.g., type "nep" for Nepal)


**Step 4:** Click on the desired country from the list.

**Step 5:** The country code will automatically populate. For example:

- Nepal displays as "(+977)"
- India displays as "(+91)"
- United States displays as "(+1)"


### 4.4 Entering the User Full Name

**Step 1:** Locate the field labeled **"User Full Name *"** (the asterisk indicates this field is required).

**Step 2:** Click inside the text input field.

**Step 3:** Type the user's complete legal name.

- Example: "Adh Adhikar Chaudhary"


**Step 4:** Ensure the name is spelled correctly as it will appear on reports and records.

**Validation Rules:**

- This field is mandatory and cannot be left empty
- Should contain alphabetic characters and spaces
- Recommended to use proper capitalization


### 4.5 Entering the User Display Name

**Step 1:** Locate the field labeled **"User Display Name *"** (required field).

**Step 2:** Click inside the text input field.

**Step 3:** Type the name that should be displayed throughout the system.

- This can be the same as the full name
- Or a preferred name/nickname
- Example: "Adh Adhikar Chaudhary"


**Important Notes:**

- The display name appears in:

- Chat conversations
- Activity logs
- Dropdown menus when assigning tasks
- Team member lists





### 4.6 Entering the Email Address

The email address serves as the primary login credential and communication channel.

**Step 1:** Locate the field labeled **"Email *"** (required field).

**Step 2:** Click inside the text input field.

**Step 3:** Type a valid email address for the user.

- Example: "adhadhikarpartner@yopr"


**Step 4:** If needed, you may update or re-enter the email if a correction is required.

- Example correction: "adhadhikarpartne111r@y"


**Validation Rules:**

- Must be a valid email format (contains @ symbol and domain)
- Must be unique within the system (no duplicate emails allowed)
- Will be used for login and password reset


**Important Considerations:**

- Ensure the email is accessible by the user
- Corporate emails are recommended for business accounts
- The user will receive login credentials at this email address


### 4.7 Entering the Phone Number

**Step 1:** Ensure you have already selected the country code (see Section 4.3).

**Step 2:** Locate the phone number input field (next to the country code).

**Step 3:** Enter the phone number WITHOUT the country code.

- Correct: "9812345678"
- Incorrect: "+977 9812345678"


**Note:** The phone number field may be optional depending on your organization's configuration.

### 4.8 Selecting the User Role

The role determines what permissions and access levels the user will have.

**Step 1:** Locate the role selection dropdown, often labeled **"Role"** or **"Select Role"**.

**Step 2:** Click on the dropdown to view available roles.

**Step 3:** Select the appropriate role:

- **Admin** - Full system access
- **Agent** - Limited access focused on operations


**Step 4:** Click on your selection to confirm.

- Example: Selecting "Adi Admin" assigns administrative privileges


### 4.9 Saving the New User

**Step 1:** Review all entered information for accuracy:

- User Full Name
- User Display Name
- Email Address
- Phone Number (with correct country code)
- Assigned Role


**Step 2:** Click the **"Add User"** button at the bottom of the form.

**Step 3:** Wait for the system to process the request.

**Step 4:** Upon successful creation, a confirmation message will appear:

\`\`\`plaintext
"User added successfully!"
\`\`\`

**Step 5:** Click anywhere on the success message or click **"OK"** to dismiss it.

**Step 6:** The new user will now appear in the user list table.

### 4.10 What Happens After User Creation

Once a user is successfully created:

1. The user account is immediately active in the system
2. Login credentials should be communicated to the user securely
3. The user can log in using their email address
4. Initial password setup may be required (depending on system configuration)
5. The user will have access to features based on their assigned role


---

## 5. Managing User Status

### 5.1 Understanding User Status

Each user account has a status that controls their ability to access the system:

| Status | Toggle Position | Color | Description |
|---|---|---|---|
| Active | ON (Right) | Green | User can log in and use the system |
| Inactive | OFF (Left) | Gray | User cannot log in; access is suspended |


### 5.2 When to Change User Status

**Set to Inactive when:**

- An employee is on extended leave
- A team member has left the organization
- Temporary suspension of access is required
- Security concerns require immediate access revocation


**Set to Active when:**

- A new user needs to begin using the system
- An employee returns from leave
- Access suspension has been resolved


### 5.3 Changing User Status - Detailed Steps

**Step 1:** Navigate to the User Management page.

**Step 2:** Locate the user whose status you want to change in the user list table.

**Step 3:** Find the **"Status"** column for that user.

**Step 4:** Click on the toggle switch. The switch appearance will indicate:

- If currently Active (green/on) - clicking will deactivate
- If currently Inactive (gray/off) - clicking will activate


**Step 5:** A confirmation dialog will appear with the title:

\`\`\`plaintext
"Confirm Status Change"
\`\`\`

**Step 6:** The dialog will display the pending status change:

- If activating: "Inactive" will change to "Active"
- If deactivating: "Active" will change to "Inactive"


**Step 7:** Review the change and choose an action:

- Click **"Confirm"** to proceed with the status change
- Click **"Cancel"** to abort and keep the current status


**Step 8:** If confirmed, the status toggle will update to reflect the new status.

### 5.4 Status Change Confirmation Dialog Details

The confirmation dialog includes:

| Element | Description |
|---|---|
| Dialog Title | "Confirm Status Change" |
| Status Indicator | Shows current status being changed (e.g., "Inactive" or "Active") |
| Confirm Button | Applies the status change |
| Cancel Button | Closes dialog without making changes |


### 5.5 Important Considerations

- **Immediate Effect:** Status changes take effect immediately
- **Active Sessions:** Deactivating a user does NOT immediately log them out if they have an active session
- **Data Preservation:** Deactivating a user does not delete their data or history
- **Reversible Action:** Status changes can be reversed at any time
- **No Notification:** By default, users are not notified when their status changes


---

## 6. Editing User Information

### 6.1 Overview

The edit function allows administrators to modify existing user information without creating a new account. All fields that were entered during user creation can be updated.

### 6.2 Accessing the Edit Function

**Step 1:** Navigate to the User Management page.

**Step 2:** Locate the user you wish to edit in the user list table.

**Step 3:** Scroll horizontally if needed to find the **"Actions"** column.

**Step 4:** Click the **"Edit"** button in the Actions column for that user.

**Step 5:** The edit form will open, pre-populated with the user's current information.

### 6.3 Modifiable Fields

The following fields can be modified during editing:

| Field | Can Be Changed | Notes |
|---|---|---|
| User Full Name | Yes | Update for legal name changes |
| User Display Name | Yes | Update for preference changes |
| Email | Yes | Caution: Changes login credentials |
| Phone Number | Yes | Include updating country code if needed |
| Country Code | Yes | Select new country from dropdown |
| Role | Yes | Changes permission level |


### 6.4 Making Changes

**Step 1:** In the edit form, click on the field you want to modify.

**Step 2:** Clear the existing content if replacing entirely, or position your cursor to make partial edits.

**Step 3:** Enter the new information.

**Step 4:** Repeat for any additional fields that need updating.

**Step 5:** Review all changes carefully.

### 6.5 Saving Changes

**Step 1:** After making all necessary modifications, locate the **"Save"** or **"Update"** button.

**Step 2:** Click the button to save your changes.

**Step 3:** Wait for confirmation that the changes have been saved.

**Step 4:** The user list will reflect the updated information.

### 6.6 Canceling Changes

If you decide not to save your changes:

**Step 1:** Locate the **"Go Back"** button or back arrow icon.

**Step 2:** Click to return to the user list without saving.

**Step 3:** All changes made in the edit form will be discarded.

### 6.7 Special Considerations When Editing

**Changing Email Address:**

- The user's login credential will change
- Ensure the user is informed of their new login email
- Previous email will no longer work for login


**Changing Role:**

- Permission changes take effect on the user's next login
- Consider informing the user of their new access level
- Downgrading from Admin to Agent will restrict feature access


---

## 7. User Roles and Permissions

### 7.1 Available Roles

The Worksii platform currently supports two user roles:

#### 7.1.1 Admin Role

**Description:** Full administrative access to all system features and settings.

**Permissions Include:**

- User Management (create, edit, delete users)
- System Configuration and Settings
- Campaign Management (create, edit, delete)
- Full Messaging Access (all channels)
- Wallet and Transaction Management
- Data Source Management
- Sender Configuration
- Report Generation and Analytics
- Integration Management


**Recommended For:**

- System Administrators
- Business Owners
- IT Managers
- Senior Operations Staff


#### 7.1.2 Agent Role

**Description:** Operational access focused on day-to-day messaging and customer interaction.

**Permissions Include:**

- Chatii (messaging interface)
- Unified Inbox Access
- Campaign Viewing (limited to assigned campaigns)
- Contact Interaction
- Basic Reporting


**Restricted From:**

- User Management
- System Configuration
- Financial/Wallet Management
- Sender Configuration
- Data Source Management


**Recommended For:**

- Customer Service Representatives
- Sales Agents
- Support Staff
- Team Members


### 7.2 Role Assignment Best Practices

- **Principle of Least Privilege:** Assign the minimum role necessary for the user's job function
- **Admin Limitation:** Limit Admin accounts to reduce security risk
- **Regular Review:** Periodically review and adjust roles as responsibilities change
- **Documentation:** Maintain records of role assignments and changes


---

## 8. Field Specifications and Validation

### 8.1 User Full Name Field

| Specification | Value |
|---|---|
| Field Label | User Full Name * |
| Required | Yes |
| Character Type | Alphabetic, spaces, hyphens, apostrophes |
| Maximum Length | 100 characters (recommended) |
| Example | Adh Adhikar Chaudhary |


### 8.2 User Display Name Field

| Specification | Value |
|---|---|
| Field Label | User Display Name * |
| Required | Yes |
| Character Type | Alphabetic, numeric, spaces |
| Maximum Length | 50 characters (recommended) |
| Example | Adh Adhikar Chaudhary |


### 8.3 Email Field

| Specification | Value |
|---|---|
| Field Label | Email * |
| Required | Yes |
| Format | Valid email format ([user@domain.com](mailto:user@domain.com)) |
| Uniqueness | Must be unique in the system |
| Case Sensitivity | Typically case-insensitive |
| Example | adhadhikarpartner@yopr |


### 8.4 Phone Number Field

| Specification | Value |
|---|---|
| Field Label | Phone |
| Required | No (optional) |
| Format | Numeric only (no spaces or dashes) |
| Country Code | Selected separately via dropdown |
| Example | 9812345678 with (+977) prefix |


### 8.5 Country Code Field

| Specification | Value |
|---|---|
| Field Type | Dropdown with search |
| Required | Yes (if phone number is provided) |
| Search Function | Type to filter countries |
| Display Format | Country name with code |
| Example | Nepal (+977) |


### 8.6 Role Field

| Specification | Value |
|---|---|
| Field Type | Dropdown selection |
| Required | Yes |
| Available Options | Admin, Agent |
| Default Value | None (must be selected) |


---

## 9. Navigation and Interface Elements

### 9.1 Sidebar Navigation

The left sidebar provides access to all Worksii modules:

| Menu Item | Icon | Description |
|---|---|---|
| Dashboard | Home | Main overview page |
| Wallet Transactions | Wallet | Financial transactions |
| User Management | Users | Team member management |
| Messaging Service | Message | Messaging configuration |
| Campaign | Megaphone | Marketing campaigns |
| Data Source | Database | Contact data management |
| Sender Configuration | Settings | Sender ID setup |
| General Configuration | Gear | System settings |
| Unified Inbox | Inbox | Combined message inbox |
| Chatii | Chat | Real-time messaging |


### 9.2 Header Bar Elements

| Element | Location | Function |
|---|---|---|
| Search Bar | Center | Global search (Cmd+K shortcut) |
| Add Funds Button | Right | Top up account balance |
| Balance Display | Right | Shows current wallet balance |
| Profile Icon | Far Right | Account settings and logout |


### 9.3 Page-Specific Elements

**Add New Button**

- Location: Top right of User Management page
- Function: Opens the new user creation form
- Appearance: Primary action button


**Edit Button**

- Location: Actions column in user table
- Function: Opens user edit form
- Appearance: Text link or icon button


**Status Toggle**

- Location: Status column in user table
- Function: Switches between Active/Inactive
- Appearance: Toggle switch with color indicator


**Go Back Button**

- Location: Top left of form pages
- Function: Returns to previous page
- Appearance: Arrow icon or "Go Back" text


---

## 10. Troubleshooting Guide

### 10.1 Common Issues and Solutions

#### Issue: Cannot Add New User

**Possible Causes and Solutions:**

| Cause | Solution |
|---|---|
| Email already exists | Use a unique email address |
| Required fields empty | Fill in all fields marked with asterisk (*) |
| Invalid email format | Ensure email contains @ and valid domain |
| Session expired | Log out and log back in |
| Insufficient permissions | Contact an Admin user |


#### Issue: User Cannot Log In

**Possible Causes and Solutions:**

| Cause | Solution |
|---|---|
| Account is Inactive | Change status to Active via toggle |
| Wrong email entered | Edit user and correct email address |
| Password issues | Initiate password reset for user |
| Browser cache | Clear browser cache and cookies |


#### Issue: Status Toggle Not Working

**Possible Causes and Solutions:**

| Cause | Solution |
|---|---|
| Page not fully loaded | Wait for page to load completely |
| JavaScript disabled | Enable JavaScript in browser |
| Network issue | Check internet connection |
| Session timeout | Refresh page and try again |


#### Issue: Changes Not Saving

**Possible Causes and Solutions:**

| Cause | Solution |
|---|---|
| Validation errors | Check for error messages on fields |
| Network timeout | Check connection and retry |
| Required field missing | Complete all required fields |
| Duplicate email | Use a different email address |


#### Issue: Cannot See User Management in Sidebar

**Possible Causes and Solutions:**

| Cause | Solution |
|---|---|
| Insufficient role | Contact Admin for role upgrade |
| Menu collapsed | Click on User Management to expand |
| Page loading | Wait for sidebar to fully load |


### 10.2 Error Messages

| Error Message | Meaning | Action |
|---|---|---|
| "Email already exists" | Another user has this email | Use different email |
| "Required field" | Mandatory field is empty | Fill in the field |
| "Invalid email format" | Email syntax is incorrect | Correct the format |
| "User added successfully" | User was created | This is a success message |
| "Confirm Status Change" | Confirmation needed | Click Confirm or Cancel |


---

## 11. Best Practices

### 11.1 Security Best Practices

1. **Limit Admin Accounts:** Keep the number of Admin users to a minimum. Only grant Admin access to those who genuinely require it.
2. **Regular Audits:** Periodically review the user list to ensure all accounts are still needed and have appropriate roles.
3. **Deactivate Rather Than Delete:** When a user leaves the organization, deactivate their account rather than deleting it to preserve audit trails.
4. **Unique Emails:** Always use individual email addresses rather than shared or generic emails.
5. **Prompt Offboarding:** Immediately deactivate accounts when employees leave or change roles.


### 11.2 Operational Best Practices

1. **Consistent Naming:** Establish a naming convention for Display Names to maintain consistency.
2. **Complete Information:** Fill in all fields including optional ones like phone number for complete records.
3. **Role Documentation:** Maintain external documentation of who has which role and why.
4. **Change Logging:** Keep records of status changes and role modifications outside the system.
5. **User Communication:** Notify users when creating their accounts or changing their permissions.


### 11.3 Data Quality Best Practices

1. **Verify Email Addresses:** Confirm email addresses are correct before creating accounts.
2. **Standardize Phone Format:** Use consistent formatting for phone numbers.
3. **Update Promptly:** Keep user information current, especially when employees change names or contact details.
4. **Regular Cleanup:** Remove or deactivate test accounts after testing is complete.


---

## 12. Frequently Asked Questions

### General Questions

**Q: How many users can I add to the system?**
A: The number of users depends on your subscription plan. Contact your account manager for specific limits.

**Q: Can a user have multiple roles?**
A: No, each user can only be assigned one role at a time. If additional permissions are needed, upgrade to Admin role.

**Q: Can I delete a user permanently?**
A: The interface supports deactivating users. For permanent deletion, contact system support.

### Adding Users

**Q: What happens after I add a user?**
A: The user account is created immediately. You need to provide them with their login credentials (email and initial password).

**Q: Can I add multiple users at once?**
A: Currently, users must be added one at a time through the interface. For bulk imports, contact support.

**Q: What if I enter the wrong email?**
A: You can edit the user after creation to correct the email address.

### Status Management

**Q: Will deactivating a user log them out immediately?**
A: No, if they have an active session, they may continue until the session expires. Deactivation prevents new logins.

**Q: Is deactivation reversible?**
A: Yes, you can reactivate a user at any time by toggling the status back to Active.

**Q: Can a deactivated user still receive messages?**
A: No, deactivated users cannot access any system features including messages.

### Editing Users

**Q: Can I change a user's email address?**
A: Yes, but remember this changes their login credential. Inform the user of the change.

**Q: What happens if I change someone's role from Admin to Agent?**
A: They will lose access to admin features on their next login. Existing work is not affected.

### Technical Questions

**Q: Why is the country dropdown not loading?**
A: This may be due to slow network connection. Wait a moment or refresh the page.

**Q: Can I use the same phone number for multiple users?**
A: Yes, phone numbers do not need to be unique, but emails must be unique.

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Worksii User Management User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | User Management |


---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
