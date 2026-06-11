Implementation Doc: Colored Tech Icons With Iconify

Use Iconify’s colored sets first, especially logos:*. Avoid simple-icons:* when you want real brand colors because Simple Icons are usually monochrome.

Official docs reference: Iconify React package README

1. Install

Recommended current package:

npm install @iconify-icon/react
2. Basic Usage

import { Icon } from "@iconify-icon/react";

export function TechIcon() {
  return <Icon icon="logos:typescript-icon" width="32" height="32" />;
}
3. Colored Icon IDs

Use these for the portfolio carousel/grid:

export const coloredTechIcons = [
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Prisma", icon: "logos:prisma" },
  { name: "n8n", icon: "logos:n8n-icon" },
  { name: "Stripe", icon: "logos:stripe" },
  { name: "Cloudflare", icon: "logos:cloudflare-icon" },
];
4. Reusable Component

import { Icon } from "@iconify-icon/react";

type TechIconProps = {
  name: string;
  icon: string;
};

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon icon={icon} width="28" height="28" aria-label={name} />
      <span>{name}</span>
    </div>
  );
}
5. Render List

import { coloredTechIcons } from "./tech-icons";
import { TechIcon } from "./TechIcon";

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-4">
      {coloredTechIcons.map((tech) => (
        <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
}
6. For Black/White Icons

Some brands are naturally monochrome: Next.js, Express, Vercel, shadcn/ui, Radix UI. Use a colored tile behind them.

<Icon icon="simple-icons:nextdotjs" className="text-white" width="28" height="28" />
Example tile:

<div className="flex h-12 w-12 items-center justify-center rounded-md bg-black">
  <Icon icon="simple-icons:nextdotjs" className="text-white" width="28" height="28" />
</div>
Recommended rule: use logos:* for colored logos, use simple-icons:* only inside branded color tiles when no colored logo exists.