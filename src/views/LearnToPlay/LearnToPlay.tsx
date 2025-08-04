/*
 * Copyright (C) 2012-2020  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@kidsgo/components/BackButton";
//import { useState } from "react";
//import { Link } from "react-router-dom";
//import { _ } from "translate";
//import * as data from "data";
//import * as preferences from "preferences";
//import { errorAlerter, ignore } from "misc";

export function LearnToPlay(): JSX.Element {
    const navigate = useNavigate();

    function back() {
        void navigate("/");
    }

    return (
        <div id="LearnToPlay">
            <BackButton onClick={back} />
            <div className="HelpButton" onClick={() => navigate("/help")}></div>
            <div className="spacer" />
            <div className="background-container">
                <div className="back-background" />
                <div className="background">
                    <div className="chapter-container chapter-1-container">
                        <ChapterButton chapter={1} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(1, navigate)}
                        >
                            Capturing
                        </div>
                    </div>

                    <div className="chapter-container chapter-2-container">
                        <ChapterButton chapter={2} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(2, navigate)}
                        >
                            Territory
                        </div>
                    </div>

                    {/* Continue the same pattern for remaining chapters */}
                    <div className="chapter-container chapter-3-container">
                        <ChapterButton chapter={3} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(3, navigate)}
                        >
                            Eyes
                        </div>
                    </div>

                    <div className="chapter-container chapter-4-container">
                        <ChapterButton chapter={4} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(4, navigate)}
                        >
                            Ko
                        </div>
                    </div>

                    <div className="chapter-container chapter-5-container">
                        <ChapterButton chapter={5} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(5, navigate)}
                        >
                            Reading
                        </div>
                    </div>

                    <div className="chapter-container chapter-6-container">
                        <ChapterButton chapter={6} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(6, navigate)}
                        >
                            Connecting
                        </div>
                    </div>

                    <div className="chapter-container chapter-7-container">
                        <ChapterButton chapter={7} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(7, navigate)}
                        >
                            Scoring
                        </div>
                    </div>

                    <div className="chapter-container chapter-8-container">
                        <ChapterButton chapter={8} />
                        <div
                            className="chapter-text"
                            onClick={() => navigateToChapter(8, navigate)}
                        >
                            Problems
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer" />
        </div>
    );
}

function navigateToChapter(chapter: number, navigate) {
    const last_visited_lesson_8_page = localStorage.getItem("last-visited-lesson-8-page");

    if (chapter < 8) {
        navigate(`/learn-to-play/${chapter}`);
    } else if (chapter === 8 && last_visited_lesson_8_page != null) {
        navigate(last_visited_lesson_8_page);
    } else if (chapter === 8) {
        navigate(`/learn-to-play/8/problems/capturing/1`);
    }
}

export function ChapterButton({ chapter }: { chapter: number }): JSX.Element {
    const navigate = useNavigate();
    const last_visited_lesson_8_page = localStorage.getItem("last-visited-lesson-8-page");

    return (
        <span
            className={"ChapterButton" + ` chapter-${chapter}`}
            onClick={() => {
                if (chapter === 8 && last_visited_lesson_8_page != null) {
                    void navigate(last_visited_lesson_8_page);
                } else if (chapter === 8) {
                    void navigate(`/learn-to-play/8/problems/capturing/1`);
                } else {
                    void navigate(`/learn-to-play/${chapter}`);
                }
            }}
        >
            {chapter}
        </span>
    );
}
