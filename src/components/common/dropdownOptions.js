export const includeAllBatch = (includeAll = false) => {
    const batch = [
        "Kendrobindu",
        "Durbar",
        "Kandari"
    ];

    const options = batch.map((batch)=>({
        value: batch,
        label: batch
    }));


    if(includeAll){
        options.unshift(({value:"All", label: "All"}));
    }

    return options;
};

export const includeAllDeptOptions = (includeAll = false) => {
    const departments = [
        "Apparel Engineering",
        "Fabric Engineering",
        "Wet Process Engineering",
        "Yarn Engineering"
    ];

    const options = departments.map((department) => ({
        value: department,
        label: department
    }));

    if (includeAll) {
        options.unshift({ value: "All", label: "All" }); // Add "All" to the beginning of the list
    }

    return options;
};
