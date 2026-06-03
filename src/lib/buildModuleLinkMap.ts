export interface ArticleLink {
  url: string
  title: string
}

export type ModuleLinkMap = Record<string, ArticleLink | null>

export async function buildModuleLinkMap(): Promise<ModuleLinkMap> {
  return {}
}
