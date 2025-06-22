module.exports = function (eleventyConfig) {
	// Output directory: _site

	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("kbhtml");

	eleventyConfig.addFilter("groupby", (array, key) => {
    // Return the array of items grouped by the specified key
    const result = {};
    array.forEach(item => {
      // Create a group for the key if it doesn't exist yet
      if (!result[item[key]]) {
        result[item[key]] = [];
      }
      // Push the current item to the group
      result[item[key]].push(item);
    });

    // Remap the object to an array of { key, list } objects
    return Object.keys(result).map(groupKey => ({
      key: groupKey,
      list: result[groupKey]
    }));
  });
  // --- END: Custom filter ---

};