const appRoutes = require("next-routes")();

const FrontPage = "/FrontPage";
const ChannelPage = "/ChannelPage";
const ArticlePage = "/ArticlePage";

appRoutes.add({
  name: "front-page",
  pattern: "/",
  page: FrontPage,
});
appRoutes.add({
  name: "channel-page",
  pattern: "/:channel",
  page: ChannelPage,
});
appRoutes.add({
  name: "article-page",
  pattern: "/:channel/:slug/:id",
  page: ArticlePage,
});

const Link = appRoutes.Link;
const Router = appRoutes.Router;
export { Link, Router };
export default appRoutes;
