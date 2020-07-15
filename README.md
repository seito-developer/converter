# What it "converter"?
* This is a hybrid HTML parse for the project "P"

Hi,  
This system is npm module what a converter can change develop data to staging data with the specs of clients.  
It can take these items.  

1. Make the directory "release/"
2. Change directories
3. Extract header/footer and separate html files
4. Adjust path
5. Covert utf-8 to shift-jis
6. Transfer data to STG by SCP

## How to use?

Run all 1-6 steps  
```
npm run convert
```

Run these steps  
1.Make the directory "release/"
2.Change directories
```
npm run convertInit
```

Run this step  
3.Extract header/footer and separate html files
```
npm run convertHtml
```

Run this step  
4.Adjust path
```
npm run arrangePath
```