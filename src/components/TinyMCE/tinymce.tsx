import { Editor } from "@tinymce/tinymce-react";

interface AppProps {
  onEditorChange: (content: string) => void;
  value: string;
}

export default function App({ onEditorChange, value }: AppProps) {
  return (
    <Editor
      value={value}
      onEditorChange={onEditorChange}
      apiKey="w538d4xb4lp0gr3x17r1z5a0lhb70wie6gw32dm4pqycr956"
      init={{
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "mediaembed",
          "casechange",
          "export",
          "formatpainter",
          "pageembed",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "editimage",
          "advtemplate",
          "ai",
          "mentions",
          "tinycomments",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "inlinecss",
          "markdown",
          "importword",
          "exportword",
          "exportpdf",
        ],
        forced_root_block: '',
        formats: {
          p: { block: 'p', remove: 'all' }
        },
        entity_encoding: 'raw',
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (
          request,
          respondWith: {
            string: (callback: () => Promise<string>) => void;
          }
        ) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          ),
        exportpdf_converter_options: {
          format: "Letter",
          margin_top: "1in",
          margin_right: "1in",
          margin_bottom: "1in",
          margin_left: "1in",
        },
        exportword_converter_options: { document: { size: "Letter" } },
        importword_converter_options: {
          formatting: {
            styles: "inline",
            resets: "inline",
            defaults: "inline",
          },
        },
      }}
      initialValue=""
    />
  );
}
