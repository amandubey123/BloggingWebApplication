/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoNgNARATAdA7DADBSAWAHCOdEE5VwCMhAzLiahfgKxTXqGIgGEhRy6m6KooQCmAOxSIwwQmAlSwowgF1I1XNVSI4JCHKA==
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Autoformat,
  AutoImage,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  Emoji,
  Essentials,
  FindAndReplace,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  ShowBlocks,
  SimpleUploadAdapter,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  WordCount,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

// import './App.css';

const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjE0MzY3OTksImp0aSI6IjY2OGI4NGE3LWExZTMtNGI3OS05ZmFmLTU2MWFlNDIwZGM3ZiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImQzZWNhNmFhIn0.b6RCu7gUsTdA8ZGNzAMcpZ4jhVgGvJRAgTA8YchX2iGABm6sGmxOWT_v5mY3aZOU0Roaodljep1p5gbQ7MYUOg";

export default function Editor(props) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const editorWordCountRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "sourceEditing",
            "showBlocks",
            "findAndReplace",
            "textPartLanguage",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "emoji",
            "specialCharacters",
            "pageBreak",
            "link",
            "insertImage",
            "mediaEmbed",
            "insertTable",
            "blockQuote",
            "htmlEmbed",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          Autoformat,
          AutoImage,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          Emoji,
          Essentials,
          FindAndReplace,
          FullPage,
          GeneralHtmlSupport,
          Heading,
          HtmlComment,
          HtmlEmbed,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          ListProperties,
          MediaEmbed,
          Mention,
          PageBreak,
          Paragraph,
          PasteFromOffice,
          ShowBlocks,
          SimpleUploadAdapter,
          SourceEditing,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextPartLanguage,
          TextTransformation,
          Title,
          TodoList,
          Underline,
          WordCount,
        ],
        balloonToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "|",
          "bulletedList",
          "numberedList",
        ],
        blockToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "insertTable",
          "|",
          "bulletedList",
          "numberedList",
          "outdent",
          "indent",
        ],
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
          ],
        },
        initialData: props.initialData || "",
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        mention: {
          feeds: [
            {
              marker: "@",
              feed: [
                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
              ],
            },
          ],
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor editor-container_include-block-toolbar editor-container_include-word-count"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {editorConfig && (
              <CKEditor
              onChange={props.onChange}
                onReady={(editor) => {
                  const wordCount = editor.plugins.get("WordCount");
                  editorWordCountRef.current.appendChild(
                    wordCount.wordCountContainer
                  );
                }}
                onAfterDestroy={() => {
                  Array.from(editorWordCountRef.current.children).forEach
                  (child => child.remove());
                }}
                editor={ClassicEditor}
                config={editorConfig}
                data={props.initialData || ""}
              />
            )}
          </div>
        </div>
        <div
          className="editor_container__word-count"
          ref={editorWordCountRef}
        ></div>
      </div>
    </div>
  );
}
