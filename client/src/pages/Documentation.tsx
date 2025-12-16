import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// @ts-ignore
import html2pdf from "html2pdf.js";
import { docsContent } from "@/lib/docsContent";
import { messagingServiceDocs } from "@/lib/messagingServiceDocs";
import { campaignDocs } from "@/lib/campaignDocs";
import { dataSourceDocs } from "@/lib/dataSourceDocs";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  ChevronRight, 
  Download, 
  Users, 
  LayoutGrid, 
  FileText, 
  Mail, 
  Megaphone, 
  Database, 
  Settings, 
  Inbox, 
  MessageCircle 
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/generated_images/worksii_logo_abstract.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface NavItem {
  title: string;
  id: string;
}

interface MainMenuItem {
  title: string;
  icon: React.ReactNode;
  expandable?: boolean;
  subItems?: NavItem[];
  disabled?: boolean;
  moduleKey?: string;
}

const userManagementSubItems: NavItem[] = [
  { title: "Introduction", id: "1-introduction" },
  { title: "Accessing User Mgmt", id: "2-accessing-user-management" },
  { title: "User List Interface", id: "3-understanding-the-user-list-interface" },
  { title: "Adding a New User", id: "4-adding-a-new-user" },
  { title: "Managing User Status", id: "5-managing-user-status" },
  { title: "Editing User Info", id: "6-editing-user-information" },
  { title: "Roles & Permissions", id: "7-user-roles-and-permissions" },
  { title: "Field Specs", id: "8-field-specifications-and-validation" },
  { title: "Navigation Elements", id: "9-navigation-and-interface-elements" },
  { title: "Troubleshooting", id: "10-troubleshooting-guide" },
  { title: "Best Practices", id: "11-best-practices" },
  { title: "FAQ", id: "12-frequently-asked-questions" },
];

const messagingServiceSubItems: NavItem[] = [
  { title: "Introduction to Templates", id: "ms-1-introduction-to-templates" },
  { title: "Accessing Templates", id: "ms-2-accessing-templates" },
  { title: "Template Types Overview", id: "ms-3-template-types-overview" },
  { title: "Creating WhatsApp Template", id: "ms-4-creating-a-whatsapp-template" },
  { title: "Template Fields", id: "ms-5-template-fields-and-configuration" },
  { title: "Using Variables", id: "ms-6-using-variables-in-templates" },
  { title: "Adding Sample Data", id: "ms-7-adding-sample-data" },
  { title: "Submitting for Approval", id: "ms-8-submitting-for-approval" },
  { title: "Template Best Practices", id: "ms-9-template-best-practices" },
  { title: "Troubleshooting", id: "ms-10-troubleshooting" },
];

const campaignSubItems: NavItem[] = [
  { title: "Introduction to Campaigns", id: "cp-1-introduction-to-campaigns" },
  { title: "Accessing Static Campaigns", id: "cp-2-accessing-static-campaigns" },
  { title: "Creating New Campaign", id: "cp-3-creating-a-new-static-campaign" },
  { title: "Step 1: Campaign Details", id: "cp-4-step-1-campaign-details" },
  { title: "Step 2: Data Source", id: "cp-5-step-2-data-source-configuration" },
  { title: "Step 3: Template Selection", id: "cp-6-step-3-template-selection" },
  { title: "Step 4: Scheduling", id: "cp-7-step-4-scheduling-options" },
  { title: "Saving & Launching", id: "cp-8-saving-and-launching-campaign" },
  { title: "Filter & Management", id: "cp-9-campaign-management" },
  { title: "Troubleshooting", id: "cp-10-troubleshooting" },
];

const dataSourceSubItems: NavItem[] = [
  { title: "Overview", id: "ds-1-overview" },
  { title: "Purpose of Data Sources", id: "ds-2-purpose-of-data-sources" },
  { title: "Google Sheets Data Source", id: "ds-3-creating-a-google-sheets-data-source" },
  { title: "Data Mapping & Validation", id: "ds-4-data-mapping--validation" },
  { title: "Action Buttons", id: "ds-5-action-buttons" },
  { title: "Campaign Availability", id: "ds-6-campaign-availability-rule" },
  { title: "CSV Data Source", id: "ds-7-csv-data-source" },
  { title: "Common Issues & Best Practices", id: "ds-8-common-issues--best-practices" },
  { title: "Troubleshooting", id: "ds-9-troubleshooting" },
];

const mainMenuItems: MainMenuItem[] = [
  { title: "Dashboard", icon: <LayoutGrid className="h-5 w-5" />, disabled: true },
  { title: "Wallet Transactions", icon: <FileText className="h-5 w-5" />, disabled: true },
  { title: "User Management", icon: <Users className="h-5 w-5" />, expandable: true, subItems: userManagementSubItems, moduleKey: "user-management" },
  { title: "Messaging Service", icon: <Mail className="h-5 w-5" />, expandable: true, subItems: messagingServiceSubItems, moduleKey: "messaging-service" },
  { title: "Campaign", icon: <Megaphone className="h-5 w-5" />, expandable: true, subItems: campaignSubItems, moduleKey: "campaign" },
  { title: "Data Source", icon: <Database className="h-5 w-5" />, expandable: true, subItems: dataSourceSubItems, moduleKey: "data-source" },
  { title: "Sender Configuration", icon: <Settings className="h-5 w-5" />, expandable: true, disabled: true },
  { title: "General Configuration", icon: <Settings className="h-5 w-5" />, expandable: true, disabled: true },
  { title: "Unified Inbox", icon: <Inbox className="h-5 w-5" />, disabled: true },
  { title: "Chatii", icon: <MessageCircle className="h-5 w-5" />, disabled: true },
];

type ActiveModule = "user-management" | "messaging-service" | "campaign" | "data-source";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [activeModule, setActiveModule] = useState<ActiveModule>("user-management");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({ "User Management": true });
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (title: string, moduleKey?: string) => {
    setExpandedMenus(prev => ({ ...prev, [title]: !prev[title] }));
    if (moduleKey) {
      setActiveModule(moduleKey as ActiveModule);
    }
  };

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    if (!element) return;

    const filenames: Record<ActiveModule, string> = {
      "user-management": 'Worksii-User-Management-Manual.pdf',
      "messaging-service": 'Worksii-Messaging-Service-Manual.pdf',
      "campaign": 'Worksii-Campaign-Manual.pdf',
      "data-source": 'Worksii-Data-Source-Manual.pdf'
    };

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5] as [number, number, number, number],
      filename: filenames[activeModule],
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const moduleConfig: Record<ActiveModule, { subItems: NavItem[], docs: string, title: string, subtitle: string }> = {
    "user-management": {
      subItems: userManagementSubItems,
      docs: docsContent,
      title: "User Management Manual",
      subtitle: "Comprehensive guide for Worksii Platform administrators"
    },
    "messaging-service": {
      subItems: messagingServiceSubItems,
      docs: messagingServiceDocs,
      title: "Messaging Service - Templates",
      subtitle: "Complete guide for creating and managing message templates"
    },
    "campaign": {
      subItems: campaignSubItems,
      docs: campaignDocs,
      title: "Campaign - Static Campaigns",
      subtitle: "Complete guide for creating and managing bulk messaging campaigns"
    },
    "data-source": {
      subItems: dataSourceSubItems,
      docs: dataSourceDocs,
      title: "Data Source Module",
      subtitle: "Complete guide for creating and managing data sources for campaigns"
    }
  };

  const currentSubItems = moduleConfig[activeModule].subItems;
  const currentDocs = moduleConfig[activeModule].docs;
  const currentTitle = moduleConfig[activeModule].title;
  const currentSubtitle = moduleConfig[activeModule].subtitle;

  useEffect(() => {
    const handleScroll = () => {
      const sections = currentSubItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSubItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubItemClick = (id: string, moduleKey?: string) => {
    if (moduleKey && moduleKey !== activeModule) {
      setActiveModule(moduleKey as ActiveModule);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="h-8 w-8 rounded overflow-hidden flex items-center justify-center">
          <img src={logoImage} alt="Worksii Logo" className="h-full w-full object-cover" />
        </div>
        <span className="font-semibold text-lg text-gray-900">Work<span className="text-orange-500">sii</span></span>
      </div>

      {/* Navigations Label */}
      <div className="px-4 py-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Navigations</span>
      </div>

      {/* Menu Items */}
      <ScrollArea className="flex-1">
        <div className="px-2 py-1">
          {mainMenuItems.map((item) => (
            <div key={item.title}>
              {item.expandable && item.subItems && !item.disabled ? (
                <Collapsible 
                  open={expandedMenus[item.title]} 
                  onOpenChange={() => toggleMenu(item.title, item.moduleKey)}
                >
                  <CollapsibleTrigger 
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-md transition-colors",
                      activeModule === item.moduleKey
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {item.icon}
                    <span className="flex-1 text-left">{item.title}</span>
                    <ChevronRight 
                      className={cn(
                        "h-4 w-4 text-gray-400 transition-transform duration-200",
                        expandedMenus[item.title] && "transform rotate-90"
                      )} 
                    />
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="ml-8 mt-1 space-y-0.5 border-l border-gray-200 pl-3">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick(subItem.id, item.moduleKey)}
                        className={cn(
                          "w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors text-left",
                          activeSection === subItem.id && activeModule === item.moduleKey
                            ? "bg-orange-50 text-orange-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        <span className="truncate">{subItem.title}</span>
                      </button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-md transition-colors",
                    item.disabled 
                      ? "text-gray-400 cursor-not-allowed" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  disabled={item.disabled}
                >
                  {item.icon}
                  <span className="flex-1 text-left">{item.title}</span>
                  {item.expandable && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Download Button at Bottom */}
      <div className="p-4 border-t border-gray-200">
        <Button 
          className="w-full gap-2 bg-orange-500 hover:bg-orange-600 text-white" 
          onClick={handleDownloadPDF}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 fixed inset-y-0 z-30">
        <Sidebar />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 border-b bg-white z-40 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded overflow-hidden">
            <img src={logoImage} alt="Worksii Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-semibold text-lg">Work<span className="text-orange-500">sii</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleDownloadPDF} title="Download PDF">
            <Download className="h-5 w-5" />
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 w-full">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-12 md:px-12">
          <div ref={contentRef}>
            <div className="mb-12 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4 text-gray-900">{currentTitle}</h1>
              <p className="text-xl text-gray-500">{currentSubtitle}</p>
            </div>
            
            <article className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-8 text-gray-900 scroll-m-20" {...props} />
                  ),
                  h2: ({ node, ...props }) => {
                    const textContent = props.children?.toString() || '';
                    const baseId = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    const prefixes: Record<ActiveModule, string> = {
                      "user-management": "",
                      "messaging-service": "ms-",
                      "campaign": "cp-",
                      "data-source": "ds-"
                    };
                    const id = prefixes[activeModule] + baseId;
                    return <h2 id={id} className="text-3xl font-bold tracking-tight mt-16 mb-6 pb-2 border-b border-gray-200 scroll-m-24 text-gray-900" {...props} />
                  },
                  h3: ({ node, ...props }) => (
                    <h3 className="text-2xl font-semibold tracking-tight mt-10 mb-4 text-gray-900 scroll-m-20" {...props} />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4 className="text-xl font-semibold tracking-tight mt-8 mb-4 text-gray-900 scroll-m-20" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-700" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-700" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-gray-700" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="mt-6 border-l-4 border-orange-500 pl-6 italic text-gray-600" {...props} />
                  ),
                  code: ({ node, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '')
                    const isInline = !match && !String(children).includes('\n');
                    return isInline ? (
                      <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium text-gray-900" {...props}>
                        {children}
                      </code>
                    ) : (
                      <pre className="rounded border bg-gray-50 p-4 overflow-x-auto my-6">
                        <code className="relative rounded bg-transparent font-mono text-sm text-gray-800" {...props}>
                          {children}
                        </code>
                      </pre>
                    )
                  },
                  table: ({ node, ...props }) => (
                    <div className="my-6 w-full overflow-y-auto rounded border border-gray-200">
                      <table className="w-full text-sm text-left" {...props} />
                    </div>
                  ),
                  thead: ({ node, ...props }) => (
                    <thead className="bg-gray-50 text-gray-700 font-medium" {...props} />
                  ),
                  th: ({ node, ...props }) => (
                    <th className="px-4 py-3 font-medium" {...props} />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="px-4 py-3 border-t border-gray-200" {...props} />
                  ),
                  tr: ({ node, ...props }) => (
                    <tr className="hover:bg-gray-50 transition-colors" {...props} />
                  ),
                  hr: ({ node, ...props }) => (
                    <hr className="my-8 border-gray-200" {...props} />
                  ),
                  a: ({ node, href, ...props }) => {
                    const isAnchor = href?.startsWith('#');
                    const handleClick = (e: React.MouseEvent) => {
                      if (isAnchor && href) {
                        e.preventDefault();
                        scrollToSection(href.substring(1));
                      }
                    };
                    return (
                      <a 
                        href={href} 
                        onClick={handleClick}
                        className="font-medium text-orange-600 underline underline-offset-4 hover:text-orange-500 transition-colors" 
                        {...props} 
                      />
                    );
                  }
                }}
              >
                {currentDocs}
              </ReactMarkdown>
            </article>
            
            <div className="mt-24 pt-8 border-t border-gray-200 flex justify-between text-sm text-gray-500">
              <span>Last updated: December 2024</span>
              <span>Worksii {activeModule === "user-management" ? "User Management" : activeModule === "messaging-service" ? "Messaging Service" : "Campaign"}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
