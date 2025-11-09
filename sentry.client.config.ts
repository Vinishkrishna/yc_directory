import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    // ❌ removed replayIntegration()

    Sentry.feedbackIntegration({
      colorScheme: "system",
      enableScreenshot: true,
      enableGlobalHandler: true,
      showOnError: true,
      showOnLoad: true,
    }),
  ],
  debug: true,  // keeps logs
});

