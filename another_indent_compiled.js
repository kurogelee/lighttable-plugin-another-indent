if(!lt.util.load.provided_QMARK_('lt.plugins.another-indent')) {
goog.provide('lt.plugins.another_indent');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.another_indent.indent = (function indent(line,tab_size){var size = (cljs.core.count.call(null,line) - cljs.core.count.call(null,clojure.string.triml.call(null,line)));return (size + ((tab_size - 1) * cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\t",null], null), null),cljs.core.subs.call(null,line,0,size)))));
});
lt.plugins.another_indent.indent_diff = (function indent_diff(cm,upLine,curLine){var tab = lt.objs.editor.option.call(null,cm,new cljs.core.Keyword(null,"tabSize","tabSize",3755226280));var up = lt.plugins.another_indent.indent.call(null,upLine,tab);var cur = lt.plugins.another_indent.indent.call(null,curLine,tab);if(cljs.core.truth_(lt.objs.editor.option.call(null,cm,new cljs.core.Keyword(null,"indentWithTabs","indentWithTabs",4541079970))))
{return (tab + (up - cur));
} else
{return (lt.objs.editor.option.call(null,cm,new cljs.core.Keyword(null,"indentUnit","indentUnit",1493236674)) + (up - cur));
}
});
lt.plugins.another_indent.set_indent = (function set_indent(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var cursor = cm.getCursor();var line = cursor.line;var curLine = lt.objs.editor.line.call(null,cm,line);var upLine = lt.objs.editor.line.call(null,cm,(line - 1));if((cljs.core.count.call(null,clojure.string.triml.call(null,(function (){var or__6813__auto__ = upLine;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return "";
}
})())) > 0))
{return lt.objs.editor.indent_line.call(null,cm,line,lt.plugins.another_indent.indent_diff.call(null,cm,upLine,curLine));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"set-another-indent-fixed","set-another-indent-fixed",1645143450),new cljs.core.Keyword(null,"desc","desc",1016984067),"Another Indent: set fixed indent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.another_indent.set_indent], null));
}

//# sourceMappingURL=