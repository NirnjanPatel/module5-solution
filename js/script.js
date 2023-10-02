$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  buildAndShowHomeHTML,
  true
);

var chosenCategory = chooseRandomCategory(categories);

var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, 'randomCategoryShortName', chosenCategory.short_name);

insertHtml('#main-content', homeHtmlToInsertIntoMainPage);
