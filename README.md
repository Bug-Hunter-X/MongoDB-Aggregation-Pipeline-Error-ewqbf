# MongoDB Aggregation Pipeline Bug

This repository demonstrates a common error encountered when using MongoDB's aggregation pipeline. The provided code snippet illustrates an incorrect usage of the `$group`, `$sort`, and `$limit` operators, leading to inaccurate results.

The solution provides the corrected aggregation pipeline that produces the expected output.

## Bug Description
The bug lies in the incorrect ordering and usage of aggregation pipeline stages. The current implementation may produce unexpected results due to an incorrect sequence of stages in the pipeline.

## Bug Solution
The solution showcases the proper order and usage of `$group`, `$sort`, and `$limit` operators. This corrected implementation correctly groups, sorts, and limits the data to produce the intended result.

## How to Reproduce
1. Clone this repository.
2. Set up a MongoDB instance.
3. Create a collection named `data` with sample documents.
4. Execute the code in `bug.js` to observe the incorrect behavior.
5. Execute the code in `bugSolution.js` to see the corrected aggregation result.