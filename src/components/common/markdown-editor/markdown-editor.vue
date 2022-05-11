<template>
  <div id="editor">
    <!-- Tips: Editor.md can auto append a `<textarea>` tag -->
     <textarea style="display:none;">### Hello world!</textarea>    
  </div>

</template>

<script>
import $ from 'jquery'
import editormd from "editor.md"
$(function() {
	    var testView = editormd.markdownToHTML("test-markdown-view", {
            // markdown : "[TOC]\n### Hello world!\n## Heading 2", // Also, you can dynamic set Markdown text
            // htmlDecode : true,  // Enable / disable HTML tag encode.
            // htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
        });
    });
export default {
  
}
</script>

<style lang="scss" scoped>


</style>