# resize-2x3x-assets

Searches for 2x and 3x PNGs in a directory and adjusts their sizes to be exactly 2x/3x of their 1x version. Only modifies the image canvas size - does no scaling or clipping.

## Installation

```
npm install -g resize-2x3x-assets
```

## Usage

Just run `resize-2x3x` in your asset directory. Original assets will be overwritten.

## Y tho?

High-res assets should be exactly the size of their 1x version * scale factor, otherwise clipping or resampling can occur when using them in mobile apps. Adobe Illustrator tends to export images where the 2x and 3x versions are a few pixels too small (probably due to anti-aliasing). This tool adds a few empty pixels to those images when necessary.
