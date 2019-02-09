function getDependencies(tree, allDeps = []) {
    if(tree && tree.hasOwnProperty('dependencies')) {
        Object.keys(tree.dependencies).forEach(depKey => {
            const depObj = tree.dependencies[depKey];
            const depName = `${depKey}@${depObj.version}`;
            if(!allDeps.includes(depName)) {
                allDeps.push(depName)
            }
            return getDependencies(tree.dependencies[depKey], allDeps);
        });
    }

    return allDeps.sort();
}

module.exports = getDependencies