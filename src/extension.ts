import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider(
		"htmv",
		{
			provideCompletionItems() {
				return [
					new vscode.CompletionItem("p", vscode.CompletionItemKind.Keyword),
					new vscode.CompletionItem("div", vscode.CompletionItemKind.Keyword),
					new vscode.CompletionItem("For", vscode.CompletionItemKind.Keyword)
				];
			}
		},
		"<"
	);

	context.subscriptions.push(provider);
}

export function deactivate() {}
