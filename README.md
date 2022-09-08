# Welcome to Sliced!

Welcome to the Sliced documentation for developers. This document provides information regarding setting up your own instance and identifying issues.

> **NOTE:** This project is still under development and there will be issues regarding security and efficiency.

# Changelog
Here is a full list of vunerability patches and software updates. Changes that are related to severe security issues or system vunerabilities are marked with the level value of HIGH. Please note not all changes will be logged for example: Grammar Changes, Indentation (Unless Required), Asset Changes and added Features that are not in use/released.
| V | Type | File | Description | Level |
|--|--|--|--|--|
|0.0.1|+|markdown.md|Added New Markdown|LOW


# Error Codes & Fixes

If something fails by default an error code will be returned and will consist of 4 digits and a identifier usually "E". Eg 0001E

## Error Codes Ordered By Category


## Full List

|Code Ident|Severity|Description|Fix|
|---------------|-------------|------------------|-----------------------------|
|`1000E`| 3 - High | No **GroupID** detected at `/i/:id` endpoint. This error  should not occur due to a route for `/i` (Excluding **GroupID**) already in place to handle these type of requests. | Unknown |
