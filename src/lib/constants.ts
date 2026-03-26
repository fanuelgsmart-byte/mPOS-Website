export const SITE_NAME = "Meleket";
export const SITE_TAGLINE = "Ethiopia's Complete Business Management Platform";
export const SITE_DESCRIPTION =
  "Billing, Inventory, POS, Payroll & MoR e-Invoicing — all in one app. Built for Ethiopian businesses, in Amharic and English.";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "POS Billing", href: "#pos" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const STATS = [
  { value: "5,000+", label: "Businesses Served" },
  { value: "ETB 2B+", label: "Transactions Processed" },
  { value: "13", label: "Business Modules" },
  { value: "4.8★", label: "Google Play Rating" },
];

export const FEATURES = [
  {
    id: "pos",
    icon: "ShoppingCart",
    title: "POS Billing",
    description:
      "Lightning-fast counter sales with barcode scanning, thermal printing, and multiple billing sessions simultaneously.",
    color: "#1A3C8F",
    bg: "#EEF2FF",
    points: ["Barcode scanner support", "Hold & resume bills", "Thermal receipt printing", "Keyboard shortcuts (F6, F7)"],
  },
  {
    id: "invoicing",
    icon: "FileText",
    title: "Sales & e-Invoicing",
    description:
      "Create MoR-compliant invoices with automatic IRN generation, QR codes, and daily Z-Report transmission.",
    color: "#00C853",
    bg: "#E8FFF2",
    points: ["Auto IRN & QR code", "Daily Z-Report to MoR", "VAT & TOT handling", "PDF & SMS sharing"],
  },
  {
    id: "inventory",
    icon: "Package",
    title: "Inventory & Warehouse",
    description:
      "Manage stock across multiple warehouses with FIFO/LIFO costing, real-time updates, and low-stock alerts.",
    color: "#FF6B35",
    bg: "#FFF3EE",
    points: ["Multi-warehouse support", "FIFO & LIFO costing", "Stock transfer & adjustments", "Barcode label printing"],
  },
  {
    id: "purchases",
    icon: "Truck",
    title: "Purchases & Expenses",
    description:
      "Track all supplier invoices, purchase orders, payments, and operational expenses in one place.",
    color: "#6C63FF",
    bg: "#F0EEFF",
    points: ["Purchase orders", "Supplier settlements", "Expense tracking", "Withholding tax support"],
  },
  {
    id: "payroll",
    icon: "Users",
    title: "Staff & Payroll",
    description:
      "Mark daily attendance, auto-calculate salaries, and generate salary slips — all within the platform.",
    color: "#FFB300",
    bg: "#FFF8E0",
    points: ["Daily attendance marking", "Auto salary calculation", "Salary slip PDF", "Holiday configuration"],
  },
  {
    id: "reports",
    icon: "BarChart2",
    title: "Reports & Analytics",
    description:
      "40+ reports covering sales, stock, tax, expenses, and payroll — exportable to PDF and spreadsheet.",
    color: "#E91E63",
    bg: "#FFEEF4",
    points: ["40+ report types", "PDF & Excel export", "Tax & compliance reports", "Z-Report transmission history"],
  },
];

export const MODULES = [
  { icon: "LayoutDashboard", label: "Dashboard", desc: "Business overview at a glance" },
  { icon: "Users2", label: "Parties", desc: "Customers & suppliers" },
  { icon: "Package", label: "Items & Inventory", desc: "Product catalog & stock" },
  { icon: "Warehouse", label: "Warehouses", desc: "Multi-location stock" },
  { icon: "FileText", label: "Sales & Invoicing", desc: "Billing & collections" },
  { icon: "ShoppingCart", label: "POS Billing", desc: "Counter sales" },
  { icon: "Truck", label: "Purchases", desc: "Supplier management" },
  { icon: "Wallet", label: "Cash & Bank", desc: "Money management" },
  { icon: "RefreshCw", label: "Automated Bills", desc: "Recurring invoices" },
  { icon: "BarChart2", label: "Reports", desc: "Business analytics" },
  { icon: "UserCheck", label: "Staff & Payroll", desc: "Attendance & salary" },
  { icon: "MessageSquare", label: "SMS Marketing", desc: "Customer campaigns" },
  { icon: "Settings", label: "Settings", desc: "Roles & configuration" },
];

export const INDUSTRIES = [
  { icon: "🏪", label: "Retail Shops", desc: "Manage stock, billing, and daily sales with ease" },
  { icon: "🏭", label: "Wholesalers", desc: "Bulk orders, party management, and warehouse control" },
  { icon: "🚚", label: "Distributors", desc: "Multi-warehouse tracking and purchase orders" },
  { icon: "☕", label: "Cafes & Restaurants", desc: "Fast POS billing, staff payroll, and expenses" },
  { icon: "🔧", label: "Service Providers", desc: "Service invoices, customer tracking, and reports" },
  { icon: "💊", label: "Pharmacies", desc: "Item serialization, expiry tracking, and compliance" },
];

export const TESTIMONIALS = [
  {
    name: "Abebe Kebede",
    business: "Kebede General Trading",
    city: "Addis Ababa",
    rating: 5,
    quote:
      "ከዚህ ሶፍትዌር በፊት ሁሉን ነገር በወረቀት ይሰራ ነበር። አሁን ደሞ ሂሳቤን ቀላል ሆኖ ለመምራት ችያለሁ። (Before this software, everything was on paper. Now I can manage my accounts easily.)",
    avatar: "AK",
  },
  {
    name: "Tigist Hailu",
    business: "Hailu Supermarket",
    city: "Bahir Dar",
    rating: 5,
    quote:
      "The e-invoicing feature is exactly what we needed for MoR compliance. The Z-Report sends automatically every night — I don't have to worry about it at all.",
    avatar: "TH",
  },
  {
    name: "Yonas Tadesse",
    business: "Tadesse Wholesale",
    city: "Hawassa",
    rating: 5,
    quote:
      "Managing three warehouses was a nightmare before. Now I can transfer stock between locations in seconds and always know my real inventory.",
    avatar: "YT",
  },
  {
    name: "Meron Bekele",
    business: "Bekele Cafe",
    city: "Dire Dawa",
    rating: 5,
    quote:
      "The POS billing is incredibly fast. My staff learned it in one day. The thermal printing works perfectly and customers love getting proper receipts.",
    avatar: "MB",
  },
];

export const FAQS = [
  {
    q: "Is this compliant with Ethiopian Ministry of Revenue e-invoicing?",
    a: "Yes. Every sales invoice automatically generates an IRN (Invoice Reference Number) and QR code. A daily Z-Report is compiled and transmitted to the MoR at the end of each business day — automatically.",
  },
  {
    q: "Does it support the Ethiopian Calendar?",
    a: "Yes. Ethiopian calendar is the primary date system throughout the platform. Gregorian calendar display is available as an optional setting.",
  },
  {
    q: "Can I use it in Amharic?",
    a: "Yes. The platform is fully bilingual — Amharic and English. You can switch languages at any time without affecting your business data.",
  },
  {
    q: "Does it work for businesses with multiple locations?",
    a: "Absolutely. The warehouse module supports multiple locations. You can transfer stock between warehouses, view per-location inventory, and generate location-specific reports.",
  },
  {
    q: "What payment methods does it support for Ethiopia?",
    a: "Cash, Bank Transfer, Telebirr, CBE Birr, and any custom payment modes you configure in settings.",
  },
  {
    q: "How many users can I add to my account?",
    a: "You can add unlimited staff with role-based permissions — Owner, Partner, Accountant, Stock Manager, or Salesman/Cashier. Each role has carefully scoped access.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started",
    highlight: false,
    features: [
      "Up to 50 invoices/month",
      "1 warehouse",
      "Basic inventory",
      "POS billing",
      "Sales & purchase records",
      "Standard reports",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "399",
    period: "per month",
    description: "For growing businesses",
    highlight: true,
    features: [
      "Unlimited invoices",
      "3 warehouses",
      "Full inventory (FIFO/LIFO)",
      "MoR e-Invoicing & Z-Report",
      "Staff & payroll",
      "SMS marketing",
      "All 40+ reports",
      "Priority support",
    ],
    cta: "Get Pro",
  },
  {
    name: "Business",
    price: "799",
    period: "per month",
    description: "For multi-location operations",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited warehouses",
      "Multiple business profiles",
      "Advanced user roles",
      "Automated billing",
      "Dedicated support",
      "Custom invoice themes",
      "API access",
    ],
    cta: "Get Business",
  },
];
