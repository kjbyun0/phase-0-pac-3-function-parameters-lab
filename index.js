  function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }


  console.log(introduction("Sue"));
  console.log(introductionWithLanguage("Sue", "Python"));
  console.log(introductionWithLanguageOptional("Sue"));
  console.log(introductionWithLanguageOptional("Sue", "Python"));