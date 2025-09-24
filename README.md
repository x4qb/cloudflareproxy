# Cloudflare Workers - REST API Proxier

This is a **simple Cloudflare Workers template** that allows you to proxy HTTP requests via a REST API.  
It can be useful for bypassing CORS restrictions, hiding API keys, or creating a custom gateway.

---

## Features

- Simple REST API proxy  
- Deployable to Cloudflare Workers easily
- No backend or advanced knowledge required.
- Custom headers are supported and easy to add.

---

## Setup & Usage

### 1. Fork or Copy this Repository

#### Fork:
- Click the **Fork** button on GitHub  
- This creates a copy in your GitHub account

### 2. Import into Cloudflare Workers.
### 3. After deployment, the usage is seamless:
#### Usage:
- Use a REST API requester such as https://reqbin.com or https://postman.com
- Template JSON body:
```JSON
{
  "url": "https://target-api.com/endpoint",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer token"
  },
  "body": null
}
```

# End
### https://github.com/x4qb
### https://github.com/x4qb/cloudflareproxy
