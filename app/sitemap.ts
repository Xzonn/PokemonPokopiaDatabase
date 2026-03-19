import { MetadataRoute } from "next";

import { HabitatData, ItemData, PokemonData } from "@/data";
import { SITE_URL, getPokemonFullId } from "@/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pokemon-list`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/habitat-list`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/event-list`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const pokemonRoutes: MetadataRoute.Sitemap = PokemonData.map((p) => ({
    url: `${SITE_URL}/p/${getPokemonFullId(p)}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const habitatRoutes: MetadataRoute.Sitemap = HabitatData.map((h) => ({
    url: `${SITE_URL}/h/${h.index.toString().padStart(3, "0")}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const itemRoutes: MetadataRoute.Sitemap = ItemData.map((i) => ({
    url: `${SITE_URL}/i/${i.hash}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...pokemonRoutes, ...habitatRoutes, ...itemRoutes];
}
