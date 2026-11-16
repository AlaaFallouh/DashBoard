type="importmap"
    {
        "imports": {
            "ckeditor5": "https://cdn.ckeditor.com/ckeditor5/43.3.1/ckeditor5.js",
            "ckeditor5/": "https://cdn.ckeditor.com/ckeditor5/43.3.1/"
        }
    }


type="module"
    import {
        ClassicEditor,
        Essentials,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Subscript,
        Superscript,
        Font,
        Paragraph,
        CodeBlock,
        Link,
        List,
        Image,
        ImageToolbar,
        ImageCaption,
        ImageStyle,
        ImageResize,
        Table,
        TableToolbar,
        MediaEmbed,
        BlockQuote,
        Alignment,
        Highlight,
        RemoveFormat,
        Heading,
        TodoList,
        Indent,
        IndentBlock
    } from 'ckeditor5';

    ClassicEditor
        .create(document.querySelector('#editor'), {
            plugins: [
                Essentials, Bold, Italic, Underline, Strikethrough, Subscript, Superscript, Font, Paragraph, CodeBlock,
                Link, List, Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, Table, TableToolbar,
                MediaEmbed, BlockQuote, Alignment, Highlight, RemoveFormat, Heading, TodoList, Indent, IndentBlock
            ],
            toolbar: {
                items: [
                    'undo', 'redo',
                    '|',
                    'heading',
                    '|',
                    'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                    '|',
                    'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'code',
                    '|',
                    'link', 'uploadImage', 'blockQuote', 'codeBlock',
                    '|',
                    'alignment',
                    '|',
                    'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                    '|',
                    'insertTable', 'mediaEmbed',
                    '|',
                    'highlight', 'removeFormat'
                ],
                shouldNotGroupWhenFull: true
            },
            image: {
                toolbar: [
                    'imageTextAlternative', 'toggleImageCaption', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage'
                ]
            },
            table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
            },
            language: {
                lnguage: 'ar',
                languageDirection: 'rtl'
            }
        })
        .then(editor => {
            console.log('Editor was initialized', editor);
        })
        .catch(error => {
            console.error(error);
        });