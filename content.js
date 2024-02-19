function setStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .ace_editor {
        font-family: 'JetBrains Mono', monospace !important;
        font-size: 14px !important;
        line-height: 1.8 !important;
    }
`;
  document.head.appendChild(style);
}

function setEditorPreferences() {
  let editor;
  try {
    const element = document.getElementsByClassName('ace_editor')[0];
    element.id = 'editor';
    editor = ace.edit('editor');
  } catch (error) {
    console.error('Failed to set editor preferences, retrying...', error);
    setTimeout(setEditorPreferences, 500);
  }

  if (editor) {
    editor.setWrapBehavioursEnabled(true);
    editor.setShowPrintMargin(true);
    editor.commands.commands.Suggestion.bindKey.mac = 'Shift-Tab';
    editor.commands.commands.Save.bindKey.mac = 'Cmd-S';
    editor.commands.addCommands(editor.commands.commands);
  }
}

setStyle();
setEditorPreferences();
