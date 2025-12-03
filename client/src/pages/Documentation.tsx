import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docsContent } from "@/lib/docsContent";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, ChevronRight, Home, BookOpen, Shield, Settings, HelpCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/generated_images/worksii_logo_abstract.png";

// Types for Sidebar Navigation
interface NavItem {
  title: string;
  id: string;
  icon?: React.ReactNode;
}

// Extracted Sections for Navigation (Manual mapping for stability)
const navItems: NavItem[] = [
  { title: "Introduction", id: "1-introduction", icon: <Home className="h-4 w-4" /> },
  { title: "Accessing User Mgmt", id: "2-accessing-user-management", icon: <BookOpen className="h-4 w-4" /> },
  { title: "User List Interface", id: "3-understanding-the-user-list-interface", icon: <BookOpen className="h-4 w-4" /> },
  { title: "Adding a New User", id: "4-adding-a-new-user", icon: <BookOpen className="h-4 w-4" /> },
  { title: "Managing User Status", id: "5-managing-user-status", icon: <Settings className="h-4 w-4" /> },
  { title: "Editing User Info", id: "6-editing-user-information", icon: <Settings className="h-4 w-4" /> },
  { title: "Roles & Permissions", id: "7-user-roles-and-permissions", icon: <Shield className="h-4 w-4" /> },
  { title: "Field Specs", id: "8-field-specifications-and-validation", icon: <BookOpen className="h-4 w-4" /> },
  { title: "Navigation Elements", id: "9-navigation-and-interface-elements", icon: <BookOpen className="h-4 w-4" /> },
  { title: "Troubleshooting", id: "10-troubleshooting-guide", icon: <HelpCircle className="h-4 w-4" /> },
  { title: "Best Practices", id: "11-best-practices", icon: <Shield className="h-4 w-4" /> },
  { title: "FAQ", id: "12-frequently-asked-questions", icon: <HelpCircle className="h-4 w-4" /> },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

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
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
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

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center">
            <img src={logoImage} alt="Worksii Logo" className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-sidebar-foreground">Worksii Docs</h1>
            <p className="text-xs text-muted-foreground">User Management v1.0</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search docs..."
            className="pl-9 bg-sidebar-accent/50 border-sidebar-border focus:bg-background transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1 py-4">
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              {item.icon}
              {item.title}
              {activeSection === item.id && (
                <ChevronRight className="ml-auto h-4 w-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-center text-muted-foreground">
          &copy; 2024 Worksii Platform
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 fixed inset-y-0 z-30">
        <Sidebar />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/80 backdrop-blur-md z-40 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="h-8 w-8 rounded-md overflow-hidden bg-primary/10">
            <img src={logoImage} alt="Worksii Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-bold text-lg">Worksii Docs</span>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 w-full">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-12 md:px-12">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-foreground scroll-m-20" {...props} />
                ),
                h2: ({ node, ...props }) => {
                   // Extract ID from markdown text if it matches strict format or generic slugify
                   const id = props.id || props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                   return <h2 id={id} className="text-3xl font-bold tracking-tight mt-16 mb-6 pb-2 border-b border-border scroll-m-24 text-foreground" {...props} />
                },
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-semibold tracking-tight mt-10 mb-4 text-foreground scroll-m-20" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-xl font-semibold tracking-tight mt-8 mb-4 text-foreground scroll-m-20" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground" {...props} />
                ),
                code: ({ node, className, children, ...props }: any) => {
                   const match = /language-(\w+)/.exec(className || '')
                   const isInline = !match && !String(children).includes('\n');
                   return isInline ? (
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props}>
                        {children}
                      </code>
                   ) : (
                      <pre className="rounded-lg border bg-muted p-4 overflow-x-auto my-6">
                        <code className="relative rounded bg-transparent font-mono text-sm font-medium text-foreground" {...props}>
                          {children}
                        </code>
                      </pre>
                   )
                },
                table: ({ node, ...props }) => (
                  <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
                    <table className="w-full text-sm text-left" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-muted text-muted-foreground font-medium" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="px-4 py-3 font-medium" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="px-4 py-3 border-t border-border" {...props} />
                ),
                tr: ({ node, ...props }) => (
                  <tr className="hover:bg-muted/50 transition-colors" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-8 border-border" {...props} />
                ),
                a: ({ node, href, ...props }) => {
                  // Handle anchor links manually to ensure smooth scroll works
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
                      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" 
                      {...props} 
                    />
                  );
                }
              }}
            >
              {docsContent}
            </ReactMarkdown>
          </article>
          
          <div className="mt-24 pt-8 border-t border-border flex justify-between text-sm text-muted-foreground">
             <span>Last updated: December 2024</span>
             <span>Worksii User Management</span>
          </div>
        </div>
      </main>
    </div>
  );
}
