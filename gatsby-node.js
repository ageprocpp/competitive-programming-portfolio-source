exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions
    if (page.path !== "/") {
        return
    }
    deletePage(page)
    createPage({
        ...page,
        matchPath: "/*",
    })
}
