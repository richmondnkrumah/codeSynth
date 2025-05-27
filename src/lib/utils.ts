import { TFiles } from "@/store/ExplorerFileTree";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function searchFiles(node: TFiles, query: string): TFiles[] {
  let results: TFiles[] = [];

  if (!node.isFolder && node.name.toLowerCase().includes(query.toLowerCase())) {
    results.push(node);
  }

  if (node.isFolder && node.children) {
    node.children.forEach((child) => {
      results = results.concat(searchFiles(child, query));
    });
  }

  return results;
}