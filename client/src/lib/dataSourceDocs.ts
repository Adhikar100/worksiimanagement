export const dataSourceDocs = `
# Data Source Module Documentation

---

## Table of Contents

1. [Overview](#1-overview)
2. [Purpose of Data Sources](#2-purpose-of-data-sources)
3. [Creating a Google Sheets Data Source](#3-creating-a-google-sheets-data-source)
4. [Data Mapping & Validation](#4-data-mapping--validation)
5. [Action Buttons](#5-action-buttons)
6. [Campaign Availability Rule](#6-campaign-availability-rule)
7. [CSV Data Source](#7-csv-data-source)
8. [Common Issues & Best Practices](#8-common-issues--best-practices)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Overview

The **Data Source** module is one of the major and most critical components of the Worksii platform. A data source represents a **dataset** that is required to create and execute campaigns. Without a valid and error-free data source, campaigns **cannot be configured or launched**.

Worksii currently supports the following data source types:

| Data Source Type | Description |
|---|---|
| Google Sheets | Connect directly to a Google Spreadsheet |
| CSV Files | Upload a CSV file with recipient data |

Both data source types follow a similar creation and validation flow, with minor differences in how the data is uploaded.

---

## 2. Purpose of Data Sources

Data sources are used to:

- **Store recipient or campaign-related data** - Contains phone numbers, names, and other recipient information
- **Map raw data columns to system-defined data types** - Ensures data is properly formatted
- **Validate data integrity before campaign execution** - Catches errors before sending
- **Ensure only clean and structured data is available for campaigns** - Prevents runtime failures

> **Important:** A data source must be **100% error-free** to be available for selection in the campaign creation dropdown.

---

## 3. Creating a Google Sheets Data Source

### 3.1 Prerequisites

Before creating a Google Sheets data source, ensure that:

- The Google Sheet exists and contains valid data
- The Google Sheet **sharing permission is set to "Editable"** or accessible by Worksii
- The sheet structure (column headers) is finalized

### 3.2 Step-by-Step Process

**Step 1:** Navigate to the **Data Source** module in the Worksii dashboard.

\`\`\`plaintext
Sidebar > Data Source
\`\`\`

**Step 2:** Click on **"Add Google Sheet"** button.

**Step 3:** Enter a **Source Name** (unique and meaningful).

**Step 4:** Paste the **Google Sheets URL**.

> Ensure the sheet is shared with appropriate access permissions.

**Step 5:** Click on **"Get Metadata Fields"**.

- The system will fetch column headers from the Google Sheet
- This may take a few seconds

**Step 6:** Click **"Next"** to proceed.

**Step 7:** **Map Columns**:

- Assign appropriate **Data Types** to each column
- Apply required **Data Mappers** if needed

| Column | Data Type | Mapper |
|---|---|---|
| phone | Phone Number | International Format |
| name | Text | None |
| id | Numeric | None |

**Step 8:** Click **"Save"**.

**Step 9:** Wait for the processing to complete.

**Step 10:** Once saved successfully, the data source will appear at the **top of the Data Source list**.

### 3.3 Google Sheet Form

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Add Google Sheet                                           │
├─────────────────────────────────────────────────────────────┤
│  Source Name *                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Enter source name                                       ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  Google Sheets URL *                                        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ https://docs.google.com/spreadsheets/d/...              ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│              [Get Metadata Fields]                          │
│                                                             │
│  Detected Columns:                                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ • phone (string)                                        ││
│  │ • fullname (string)                                     ││
│  │ • id (number)                                           ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│                    [Cancel]  [Next]                         │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 4. Data Mapping & Validation

### 4.1 Mapping Stage

During the mapping stage:

- Each column must be mapped to the correct data type
- Incorrect mappings may cause validation errors
- Mandatory fields must be correctly configured

### 4.2 Available Data Types

| Data Type | Description | Example |
|---|---|---|
| Phone Number | Mobile/telephone number | +1234567890 |
| Text | Plain text string | John Smith |
| Numeric | Integer or decimal number | 12345 |
| Email | Email address | user@example.com |
| Date | Date value | 2024-12-03 |
| Boolean | True/False value | true |

### 4.3 Automatic Validation

The system automatically validates:

- Column structure
- Data type compatibility
- Mandatory field availability
- Format compliance (phone numbers, emails, etc.)

### 4.4 Column Mapping Interface

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  Map Columns                                                │
├─────────────────────────────────────────────────────────────┤
│  Column Name    │ Data Type        │ Mapper                 │
├─────────────────┼──────────────────┼────────────────────────┤
│  phone          │ [Phone Number ▼] │ [International ▼]      │
│  fullname       │ [Text        ▼] │ [None         ▼]       │
│  id             │ [Numeric     ▼] │ [None         ▼]       │
│  email          │ [Email       ▼] │ [None         ▼]       │
├─────────────────────────────────────────────────────────────┤
│                  [Previous]  [Save]                         │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 5. Action Buttons

Once a data source is created, the following actions are available:

### 5.1 Revalidate

**Purpose:** Re-checks the data source for errors.

**When to use:**
- After making changes to the original Google Sheet
- To verify data integrity
- Before using in a campaign

**What it checks:**
- Invalid data formats
- Missing mandatory values
- Mapping mismatches

> Errors are displayed **near the affected fields** for easy correction.

### 5.2 View Data

**Purpose:** Displays the actual data fetched from the source.

**Useful for:**
- Verifying uploaded content
- Spot-checking records
- Debugging validation issues

\`\`\`plaintext
┌─────────────────────────────────────────────────────────────┐
│  View Data - AdhTest162517                                  │
├─────────────────────────────────────────────────────────────┤
│  phone          │ fullname      │ id                        │
├─────────────────┼───────────────┼───────────────────────────┤
│  +1234567890    │ John Smith    │ 1                         │
│  +0987654321    │ Jane Doe      │ 2                         │
│  +1122334455    │ Bob Wilson    │ 3                         │
├─────────────────────────────────────────────────────────────┤
│  Showing 3 of 100 records                    [Load More]    │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### 5.3 Edit

**Purpose:** Allows modification of the data source configuration.

**What can be edited:**
- Source name
- Column mappings
- Data types and mappers

> **Important:** After editing, **revalidation is required** to reflect changes.

### 5.4 Delete

**Purpose:** Removes the data source permanently.

> **Warning:** This action cannot be undone. Ensure the data source is not being used by any campaigns.

---

## 6. Campaign Availability Rule

### Critical Rule

> **Until and unless a data source is 100% error-free, it will NOT appear in the campaign data set selection dropdown.**

### Why This Matters

This rule ensures:

| Benefit | Description |
|---|---|
| Data Integrity | Only validated data is used in campaigns |
| Error-free Execution | Prevents runtime failures during delivery |
| Quality Assurance | Campaigns run smoothly without data issues |

### Checking Data Source Status

| Status | Meaning | Campaign Available? |
|---|---|---|
| ✓ Valid | No errors found | Yes |
| ⚠ Warning | Minor issues detected | Yes (with caution) |
| ✗ Error | Validation errors present | No |

---

## 7. CSV Data Source

### 7.1 Overview

CSV data sources follow a **similar flow** to Google Sheets with the main difference being the file upload method.

### 7.2 Key Differences from Google Sheets

| Aspect | Google Sheets | CSV File |
|---|---|---|
| Data Source | URL to Google Sheet | Upload file directly |
| Live Updates | Yes (revalidate to sync) | No (re-upload required) |
| Collaboration | Multiple editors | Single file |
| Size Limit | Google's limits | Platform limits |

### 7.3 Creating a CSV Data Source

**Step 1:** Navigate to **Data Source** module.

**Step 2:** Click on **"Upload CSV"** button.

**Step 3:** Enter a **Source Name**.

**Step 4:** Click **"Choose File"** and select your CSV file.

**Step 5:** Click **"Upload"** to process the file.

**Step 6:** System extracts metadata from CSV headers.

**Step 7:** Map columns to appropriate data types.

**Step 8:** Click **"Save"**.

### 7.4 CSV Format Requirements

\`\`\`csv
phone,fullname,id
+1234567890,John Smith,1
+0987654321,Jane Doe,2
+1122334455,Bob Wilson,3
\`\`\`

**Requirements:**
- File must be properly formatted CSV
- Headers must be present in the first row
- Data must conform to mapped data types
- Zero validation errors are required for campaign usage

---

## 8. Common Issues & Best Practices

### 8.1 Common Issues

| Issue | Cause | Solution |
|---|---|---|
| Google Sheet not accessible | Sharing permissions not set | Set sharing to "Anyone with link can edit" |
| Incorrect data type mapping | Wrong column type selected | Re-map with correct data type |
| Empty mandatory fields | Missing data in required columns | Fill in missing values in source |
| Invalid phone numbers | Wrong format | Use international format (+1234567890) |
| Validation errors persist | Outdated cache | Click Revalidate after fixing |

### 8.2 Best Practices

**Before Creating:**
- Finalize data before creating the data source
- Use clear and consistent column naming
- Remove empty rows and duplicates

**During Setup:**
- Double-check column mappings
- Use appropriate data types for each column
- Test with a small dataset first

**After Creation:**
- Always run **Revalidate** after making changes
- Verify data using **View Data** before campaign creation
- Monitor for validation errors

**Maintenance:**
- Regularly update source data
- Revalidate after external updates to Google Sheets
- Archive unused data sources

---

## 9. Troubleshooting

### 9.1 Data Source Not Appearing in Campaign

**Problem:** Data source doesn't appear in the campaign data set dropdown.

**Solution:**
1. Go to Data Source module
2. Find your data source
3. Click **Revalidate**
4. Fix any errors shown
5. Revalidate again until status is "Valid"

### 9.2 Google Sheet Connection Failed

**Problem:** Cannot fetch metadata from Google Sheet.

**Solution:**
1. Verify the Google Sheet URL is correct
2. Check sharing permissions (set to "Anyone with link can view/edit")
3. Ensure the sheet contains data and headers
4. Try refreshing and re-pasting the URL

### 9.3 Column Mapping Errors

**Problem:** Validation fails after mapping columns.

**Solution:**
1. Review each column's data type
2. Check for mixed data types in columns (e.g., text in a number column)
3. Ensure phone numbers are in correct format
4. Remove any special characters that don't match the data type

### 9.4 CSV Upload Failed

**Problem:** CSV file upload fails or shows errors.

**Solution:**
1. Ensure file is saved as .csv format
2. Check for encoding issues (use UTF-8)
3. Remove any special characters from headers
4. Verify file size is within limits
5. Check for proper comma separation

---

## Document Information

| Detail | Value |
|---|---|
| Document Title | Data Source Module User Manual |
| Version | 1.0 |
| Last Updated | December 2024 |
| Platform | Worksii (dev.worksii.com) |
| Applicable Module | Data Source |

---

*For additional support or questions not covered in this manual, please contact your system administrator or Worksii support team.*
`;
