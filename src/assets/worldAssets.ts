export type WorldAssetKey =
  'array' | 'linked-list' | 'stack' | 'queue' | 'world-map'

export const WORLD_ASSETS: Record<WorldAssetKey, string> = {
  array: '/picture/block-base.png',
  'linked-list': '/picture/node-hall (1).png',
  stack: '/picture/magic-stairs.png',
  queue: '/picture/node-entrance.png',
  'world-map': '/picture/ruins-map-bg.webp',
}
