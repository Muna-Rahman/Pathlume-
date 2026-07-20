export const OPPORTUNITY_TYPES = [
  { value: "internship", label: "Internship" },
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "volunteer", label: "Volunteer" },
];

export const OPPORTUNITY_STATUS_OPTIONS = [
  { value: "active", label: "Active - visible to students" },
  { value: "draft", label: "Draft - hidden, work in progress" },
  { value: "closed", label: "Closed - no longer accepting applicants" },
];

export const SORT_OPTIONS = [
  { value: "createdAt:desc", label: "Newest first" },
  { value: "createdAt:asc", label: "Oldest first" },
  { value: "stipend:desc", label: "Highest stipend" },
  { value: "stipend:asc", label: "Lowest stipend" },
  { value: "deadline:asc", label: "Deadline soon" },
  { value: "title:asc", label: "Title (A-Z)" },
];

export const CATEGORY_TAGS = [
  { value: "engineering", label: "Engineering", icon: "code" },
  { value: "design", label: "Design", icon: "palette" },
  { value: "marketing", label: "Marketing", icon: "megaphone" },
  { value: "data", label: "Data & AI", icon: "chart" },
  { value: "product", label: "Product", icon: "compass" },
  { value: "operations", label: "Operations", icon: "gear" },
];
