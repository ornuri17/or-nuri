# auth.md

This document describes how AI agents can access and interact with or-nuri.com.

## Access Model

or-nuri.com is a public, read-only personal site. All content is freely accessible — no authentication is required to read profile data, structured content, or the agent skills index.

## Agent Registration

Agents that want to identify themselves or request access to structured profile data may do so by referencing the public profile endpoint.

```json
{
  "agent_auth": {
    "skill": "https://or-nuri.com/auth.md",
    "register_uri": "https://or-nuri.com/for-bots/",
    "identity_types_supported": ["anonymous"],
    "anonymous": {
      "credential_types_supported": ["none"]
    }
  }
}
```

## Endpoints

| Resource | URL | Format |
|---|---|---|
| Structured profile | https://or-nuri.com/for-bots/ | HTML + JSON-LD |
| LLM plain-text profile | https://or-nuri.com/llms.txt | text/plain |
| Agent skills index | https://or-nuri.com/.well-known/agent-skills/index.json | application/json |
| API catalog | https://or-nuri.com/.well-known/api-catalog | application/linkset+json |

## Contact

For questions or to identify your agent: ornuri17@gmail.com
