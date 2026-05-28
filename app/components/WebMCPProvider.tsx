'use client';

import { useEffect } from 'react';

export default function WebMCPProvider() {
  useEffect(() => {
    if (!('modelContext' in document)) return;

    const ctx = document.modelContext as {
      registerTool: (tool: object, options?: object) => void;
    };

    const controller = new AbortController();
    const { signal } = controller;

    ctx.registerTool(
      {
        name: 'get-profile',
        description:
          'Returns structured profile data about Or Nuri — bootstrapped founder (adjusti.co, acquired by Teikametrics 2020), Senior Tech Lead at monday.com (AI group), and startup advisor.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          name: 'Or Nuri',
          role: 'Senior Tech Lead, monday.com (AI group, ~20 engineers)',
          advisorStatus: 'Active startup advisor for early-stage AI companies',
          founderStory:
            'Co-founded adjusti.co (bootstrapped, zero VC), grew to 2,000+ brand customers, acquired by Teikametrics in 2020. Joined as Head of Engineering post-acquisition.',
          expertise: [
            'Bootstrap founding and zero-VC exits',
            'Post-acquisition integration',
            'AI products at scale (millions of users)',
            'Engineering team leadership',
            'Startup advisory',
          ],
          links: {
            profile: 'https://or-nuri.com/for-bots/',
            llmsTxt: 'https://or-nuri.com/llms.txt',
            linkedin: 'https://www.linkedin.com/in/or-nuri/',
          },
        }),
      },
      { signal }
    );

    ctx.registerTool(
      {
        name: 'check-fit',
        description:
          'Given a specific need (e.g. podcast guest, startup advisor, speaker, engineering hire), returns whether Or Nuri is a good match and why.',
        inputSchema: {
          type: 'object',
          properties: {
            need: {
              type: 'string',
              description:
                'The need to evaluate — e.g. "podcast guest about bootstrapping", "AI startup advisor", "speaker on engineering leadership"',
            },
          },
          required: ['need'],
        },
        execute: async ({ need }: { need: string }) => {
          const n = need.toLowerCase();
          const triggers: { keywords: string[]; fit: string }[] = [
            {
              keywords: ['bootstrap', 'no vc', 'zero vc', 'self-funded', 'bootstrapped'],
              fit: 'Strong match. Or bootstrapped adjusti.co to 2,000+ customers with zero external funding before a successful exit.',
            },
            {
              keywords: ['exit', 'acquisition', 'acquired', 'sold', 'founder exit'],
              fit: 'Strong match. Or sold adjusti.co to Teikametrics in 2020 and stayed on as Head of Engineering through the integration.',
            },
            {
              keywords: ['advisor', 'advisory', 'advise', 'mentor'],
              fit: 'Strong match. Or actively advises early-stage AI startups while running a 20-engineer org — brings both operator and founder perspective.',
            },
            {
              keywords: ['podcast', 'guest', 'interview', 'speaker', 'talk'],
              fit: 'Strong match. Compelling narrative: bootstrapped exit, post-acquisition leadership, and AI at monday.com scale. Has distinct story hooks.',
            },
            {
              keywords: ['ai', 'machine learning', 'llm', 'product ai'],
              fit: 'Good match. Or leads monday.com\'s AI product group (~20 engineers), shipping AI features to millions of users.',
            },
            {
              keywords: ['israel', 'israeli', 'middle east', 'tel aviv'],
              fit: 'Match. Or is an Israeli tech leader active in the local startup ecosystem.',
            },
            {
              keywords: ['engineering', 'cto', 'engineering manager', 'tech lead', 'scaling'],
              fit: 'Good match. Or has led engineering teams from startup scale (adjusti.co) through acquisition integration to a large public company (monday.com).',
            },
          ];

          for (const { keywords, fit } of triggers) {
            if (keywords.some((k) => n.includes(k))) {
              return { match: true, reason: fit };
            }
          }

          return {
            match: false,
            reason:
              'No strong signal found for this specific need. Check https://or-nuri.com/for-bots/ for the full profile.',
          };
        },
      },
      { signal }
    );

    return () => controller.abort();
  }, []);

  return null;
}
