(ns lt.plugins.another-indent
  (:require [clojure.string :as s]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

;; 指定した行（文字列）のインデント数（スペース換算）を返す
(defn indent [line tab-size]
  (let [size (- (count line) (count (s/triml line)))]
    (->> (filter #{\tab} (subs line 0 size))
         count
         (* (dec tab-size))
         (+ size))))

;; 上行と現在行を比較して、現在行に設定するインデント増減数を返す
(defn indent-diff [cm upLine curLine]
  (let [tab (editor/option cm :tabSize)
        up (indent upLine tab)
        cur (indent curLine tab)]
    (if (editor/option cm :indentWithTabs)
      (+ tab (- up cur))
      (+ (editor/option cm :indentUnit) (- up cur)))))

;; カーソルがある行のインデントを設定する
(defn set-indent []
  (let [cm (editor/->cm-ed (pool/last-active))
        cursor (.getCursor cm)
        line (.-line cursor)
        curLine (editor/line cm line)
        upLine (editor/line cm (dec line))]
    (when (pos? (count (s/triml (or upLine ""))))
      (editor/indent-line cm line (indent-diff cm upLine curLine)))))

(cmd/command {:command :set-another-indent-fixed
              :desc "Another Indent: set fixed indent"
              :exec set-indent})
