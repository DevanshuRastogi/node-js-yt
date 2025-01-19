module.exports=function (template, actualFile) {
    const {
      id,
      name,
      color,
      modeName,
      modelNumber,
      size,
      camera,
      price,
      Description,
      ROM,
      productImage,
    } = actualFile;
    let output = template
      .replace("{{%IMAGE%}}", productImage)
      .replace("{{%NAME%}}", name)
      .replace("{{%MODELNO%}}", modelNumber)
      .replace("{{%MODELNAME%}}", modeName)
      .replace("{{%SIZE%}}", size)
      .replace("{{%CAMERA%}}", camera)
      .replace("{{%PRICE%}}", price)
      .replace("{{%COLOR%}}", color)
      .replace("{{%ID%}}", id)
      .replace("{{%ROM%}}", ROM)
      .replace("{{%DESC%}}", Description);
    return output;
  };