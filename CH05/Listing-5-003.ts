﻿namespace Listing_5_3 {
    var scope = 1;

    {
        var scope = 2;

        // Inner: 2
        console.log('Inner: ' + scope);
    }

    // Outer: 1
    console.log('Outer: ' + scope);
}