<?php

namespace App\Filament\Resources\StudetResource\Pages;

use App\Filament\Resources\StudetResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListStudets extends ListRecords
{
    protected static string $resource = StudetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
