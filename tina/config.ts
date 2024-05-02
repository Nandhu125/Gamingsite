import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "dev";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: "",
    },
  },


  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "portfolio_section",
        label: "Portfolio Section",
        path: "content/clients",
        format: "json",

        ui: {
          router: (props) => {
            return "/"
          },
          // allowedActions: {
          //   create: false,
          //   delete: false,
          // },

        },
        templates: [

          {
            name: "portfolioImages",
            label: "Portfolio Images",
            fields: [
              {
                name: "portfolioImages",
                label: "Portfolio Images",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name }
                  }
                },
                fields: [

                  {
                    name: "desktopPortfolio",
                    label: "Portfolio Image (Desktop)",
                    type: "image",
                  },

                  {
                    name: "mobilePortfolio",
                    label: "Portfolio Image (mobile)",
                    type: "image",
                  },
                ],
              },
            ],
          },


        ],
      },





    ]
  }
})
