import React from "react";

const AddEditNotes = () => {
    return (
        <div>
            <div className=" flex flex-col gap-2">
                <label className="input-label">TITLE</label>

                <input 
                    type="text"
                    className="text-xl text-slate-950 outline-none bg-slate-50"
                    placeholder="Go to Gym XD"
                />

            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">Content</label>
                <textarea 
                    type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                    placeholder="Content"
                    rows={10}
                />
            </div>

            <div className="mt-3">
                <label className="input-label">TAGS</label>
            </div>

            <button className="btn-primary font-medium mt-5 p-3" onClick={() =>{}}>

                Add
            </button>
        </div>
    );
};

export default AddEditNotes;