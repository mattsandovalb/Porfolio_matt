<?php

namespace App\Http\Controllers;

use App\Models\Works;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WorksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Works::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $work = new Works();

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
            'technologies' => 'required',
            'github' => 'required',
            'deploy' => 'required',
        ]);

        $work->name = $request ->name;
        $work->description = $request ->description;
        $work->image = $request ->image;
        $work->technologies = $request ->technologies;
        $work->github = $request ->github;
        $work->deploy = $request ->deploy;
        
        $work->save();

        return $work;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Works  $works
     * @return \Illuminate\Http\Response
     */
    public function show(Works $work)
    {
        return $work;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Works  $works
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Works $work)
    {


        $work->name = $request ->name;
        $work->description = $request ->description;
        $work->image = $request ->image;
        $work->technologies = $request ->technologies;
        $work->github = $request ->github;
        $work->deploy = $request ->deploy;

        $work->update();
        
        return $work;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Works  $works
     * @return \Illuminate\Http\Response
     */
    public function destroy(Works $work)
    {
        if(is_null($work)){
            return response()->json('No se pudo realizar la peticion', 404);
        }
            $work->delete();

        return response()->noContent();
    }
}
