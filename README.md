# Worksii Documentation Portal

A comprehensive documentation website for the Worksii platform, providing user manuals for all platform modules.

## Overview

This documentation portal serves as a centralized resource for Worksii platform users, administrators, and support teams. It provides detailed guides, step-by-step instructions, and best practices for using each module of the Worksii system.

## Features

- **Multi-Module Documentation** - Complete user manuals for 7 platform modules
- **Collapsible Navigation** - Easy-to-use sidebar with expandable menu items
- **PDF Download** - Export any module's documentation as a PDF file
- **Responsive Design** - Works on desktop and mobile devices
- **Times New Roman Typography** - Professional document styling
- **Worksii Branding** - Orange accent colors matching the Worksii design

## Documented Modules

| Module | Description |
|--------|-------------|
| **Wallet Transactions** | Managing prepaid balance, deposits, withdrawals, and financial tracking |
| **User Management** | Creating users, managing roles, permissions, and user status |
| **Messaging Service** | Creating and managing WhatsApp message templates with Meta approval |
| **Campaign** | Creating and managing bulk messaging campaigns (Static Campaigns) |
| **Data Source** | Configuring Google Sheets and CSV data sources for campaigns |
| **General Configuration** | System-wide settings including Auto Top-Up, Email Signatures, Firebase, and API keys |
| **Chatii** | Managing WhatsApp and SMS conversations in the unified inbox |

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Markdown**: React Markdown with remark-gfm
- **PDF Generation**: html2pdf.js
- **UI Components**: Radix UI, Lucide Icons
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev:client
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

```
client/
├── src/
│   ├── pages/
│   │   └── Documentation.tsx    # Main documentation page
│   ├── lib/
│   │   ├── docsContent.ts       # User Management docs
│   │   ├── messagingServiceDocs.ts
│   │   ├── campaignDocs.ts
│   │   ├── dataSourceDocs.ts
│   │   ├── generalConfigDocs.ts
│   │   ├── chatiiDocs.ts
│   │   └── walletDocs.ts
│   ├── components/
│   │   └── ui/                  # Reusable UI components
│   └── index.css                # Global styles
└── index.html
```

## Usage

1. **Navigate Modules** - Click on any module in the sidebar to view its documentation
2. **Browse Sections** - Expand modules to see sub-sections and click to scroll to that section
3. **Download PDF** - Click the "Download PDF" button to save the current module as a PDF file
4. **Mobile View** - Use the hamburger menu on mobile to access navigation

## Adding New Documentation

1. Create a new docs file in `client/src/lib/` (e.g., `newModuleDocs.ts`)
2. Export the markdown content as a string
3. Import the docs in `Documentation.tsx`
4. Add navigation items and module configuration

## License

Proprietary - Worksii Platform

## Support

For questions or support, contact your system administrator or Worksii support team.
